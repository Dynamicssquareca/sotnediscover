// pages/blog/[slug].js
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser'; // optional, not used for now

// ---------- Helpers ----------
function dateFromObjectId(id) {
  if (!id || typeof id !== 'string' || id.length < 8) return null;
  try {
    const seconds = parseInt(id.substring(0, 8), 16);
    return new Date(seconds * 1000);
  } catch {
    return null;
  }
}

function formatDateSafe(dateOrString, { fallback = '-' } = {}) {
  if (!dateOrString) return fallback;
  const d = dateOrString instanceof Date ? dateOrString : new Date(dateOrString);
  if (Number.isNaN(d.getTime())) return fallback;
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Use this to construct image urls (handles relative paths)
const buildImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  if (!process.env.NEXT_PUBLIC_BLOG_API_Image) return img;
  return `${process.env.NEXT_PUBLIC_BLOG_API_Image.replace(/\/$/, '')}/${img.replace(/^\//, '')}`;
};

// Trim posts for lists / related posts to avoid sending heavy content in props
function trimPostForList(p) {
  if (!p) return null;
  return {
    _id: p._id,
    slug: p.slug,
    title: p.title,
    // Short excerpt: prefer explicit excerpt else fallback to stripped content
    excerpt:
      (p.excerpt && (p.excerpt.length > 120 ? p.excerpt.slice(0, 120) + '...' : p.excerpt)) ||
      (p.content ? (p.content.replace(/<[^>]+>/g, '').slice(0, 120) + '...') : ''),
    banner: p.banner, // small thumb field is ideal — adjust if available
    readtimes: p.readtimes,
    createdAt: p.createdAt || p.updatedAt || (p._id ? dateFromObjectId(p._id)?.toISOString() : undefined),
    author: p.author ? { name: p.author.name, slug: p.author.slug || p.author._id } : null,
    category: p.category ? { _id: p.category._id, title: p.category.title, slug: p.category.slug } : null,
  };
}

// ---------- Component ----------
const BlogPost = ({ post, relatedPosts, relatedHeading, categories, error }) => {
  const router = useRouter();
  const [activeHeading, setActiveHeading] = useState(null);

  if (router.isFallback) {
    return <div className="container py-5">Loading...</div>;
  }
  if (!post) return <p>Post not found</p>;

  const canonicalUrl = post?.slug
    ? `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || ''}/blog/${post.slug}/`
    : `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || ''}/blog/`;

  // Build modified content (inject ids into h2) and build a TOC
  const { modifiedContent, tableOfContents } = useMemo(() => {
    let toc = [];
    let count = 0;
    // Safe fallback if post.content missing
    const raw = post.content || '';
    const contentWithIds = raw.replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
      count++;
      const id = `tb-${count.toString().padStart(2, '0')}`; // e.g. tb-01
      toc.push({ id, title: p1 });
      return `<h2 id="${id}">${p1}</h2>`;
    });
    return { modifiedContent: contentWithIds, tableOfContents: toc };
  }, [post.content]);

  // IntersectionObserver to highlight TOC item
  useEffect(() => {
    const headings = document.querySelectorAll('h2[id^="tb-"]');
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );
    headings.forEach((h) => observer.observe(h));
    return () => {
      headings.forEach((h) => observer.unobserve(h));
    };
  }, [modifiedContent]);

  // Optional: convert inline <img> tags to next/image (requires careful handling).
  // We'll render content using dangerouslySetInnerHTML to preserve markup and scripts (if any).
  // If you want to parse and replace <img> tags, you can use html-react-parser here.

  // useEffect(() => {
  //   // Helpful debug logs for build/dev
  //   // console.log('--- post object (render) ---', post);
  //   // console.log('post keys:', Object.keys(post || {}));
  //   // console.log('createdAt raw:', post?.createdAt, 'typeof:', typeof post?.createdAt);
  //   // console.log('updatedAt raw:', post?.updatedAt, 'typeof:', typeof post?.updatedAt);
  //   // console.log('_id raw:', post?._id, 'typeof:', typeof post?._id);
  //   // console.log('new Date(createdAt):', new Date(post?.createdAt).toString());
  // }, [post]);

  return (
    <>
      <Head>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt || ''} />
        <link rel="canonical" href={canonicalUrl} />
        {post.metaKeywords && <meta name="keywords" content={post.metaKeywords} />}
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt || ''} />
        <meta
          property="og:image"
          content={
            post.banner
              ? buildImageUrl(post.banner)
              : `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || ''}/img/banner/home-main-banner.png`
          }
        />
        {post.schema &&
          Array.isArray(post.schema) &&
          post.schema.map((scriptContent, index) => (
            <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: scriptContent }} />
          ))}
      </Head>

      <section className="bg--bb">
        <div className="container crm-blog-head">
          {/* Breadcrumb */}
          <div className="breadcrumb-list">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <a href="/blog">Blog</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.readtimes || ' '} min reading in —{' '}
                {post.category && post.category.slug ? (
                  <Link href={`/blog/category/${post.category.slug}`}>
                    <span>{post.category.title}</span>
                  </Link>
                ) : (
                  'Uncategorized'
                )}
              </li>
            </ol>
          </div>

          <div className="row">
            {/* Main Content (8 columns) */}
            <div className="col-lg-8">
              <div className="main-section p-30">
                <div className="blog-head">
                  <h1>{post.title}</h1>
                  <div className="combo-sect">
                    <div className="d-flex blog-author">
                      <span>
                        By{' '}
                        <Link href={`/blog/author/${post.author?.slug || post.author?._id}`}>
                          {post.author?.name || 'Author'}
                        </Link>
                      </span>
                      <span className="mx-2">|</span>
                      <span>{formatDateSafe(post?.createdAt || post?.updatedAt || dateFromObjectId(post?._id))}</span>
                    </div>
                    <div className="mb-4 post-sharing">
                      <span>Share: </span>
                      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}>
                        Facebook
                      </Link>
                      {' | '}
                      <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}`}>
                        Twitter
                      </Link>
                      {' | '}
                      <Link
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}`}
                      >
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>

                {post.banner && (
                  <div className="post-feture-image">
                    <Image
                      src={buildImageUrl(post.banner)}
                      alt={post.title}
                      width={800}
                      height={400}
                      priority
                      quality={75}
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}

                <div
                  className="mt-3 post-content-main"
                  dangerouslySetInnerHTML={{ __html: modifiedContent }}
                  suppressHydrationWarning={true}
                />

                {/* Author Profile Card */}
                <div className="card card-avt my-5">
                  <div className="card-body">
                    <Link href={`/blog/author/${post.author?.slug || post.author?._id}`}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={
                            post.author?.profilePic
                              ? `${process.env.NEXT_PUBLIC_BLOG_API_Image_profilePics.replace(/\/$/, '')}/${post.author.profilePic}`
                              : '/img/default-avatar.png'
                          }
                          alt={post.author?.name || 'Author'}
                          width={60}
                          height={60}
                          style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '12px' }}
                        />
                        <div className="card-avt-det">
                          <h4>{post.author?.name}</h4>
                          <p>{post.author?.aboutus}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar (4 columns): Table of Contents & Categories */}
            <div className="col-lg-4">
              <div className="po-sticky">
                <div className="sidebars">
                  {tableOfContents.length >= 3 && (
                    <>
                      <h3>Table of Contents</h3>
                      <ol className="list-group-tb mb-4">
                        {tableOfContents.map((item) => (
                          <li key={item.id} className={`${activeHeading === item.id ? 'active' : ''}`}>
                            <a
                              href={`#${item.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.id);
                                if (element) {
                                  const yOffset = -250; // adjust as needed
                                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                  window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                              }}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}

                  <h3>Categories</h3>
                  {categories && categories.length > 0 ? (
                    <ul className="list-group-tba">
                      {categories.map((cat) => (
                        <li key={cat._id} className="list-group-cu">
                          <Link href={`/blog/category/${cat.slug || cat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No categories available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="relted-head">{relatedHeading}</h3>
            </div>
            {relatedPosts && relatedPosts.length > 0 ? (
              relatedPosts.map((rp) => (
                <div key={rp.slug} className="col-lg-4 mb-4">
                  <div className="card h-100 card-222">
                    <div className="card-image-p">
                      {rp.banner && (
                        <Link href={`/blog/${rp.slug}`}>
                          <Image src={buildImageUrl(rp.banner)} alt={rp.title} width={768} height={402} />
                        </Link>
                      )}
                      <div className="cate-overl">
                        {rp.category && rp.category.slug ? (
                          <Link href={`/blog/category/${rp.category.slug}`}>
                            <span>{rp.category.title}</span>
                          </Link>
                        ) : (
                          'Uncategorized'
                        )}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex blog-author">
                        <span>
                          <Link href={`/blog/author/${rp.author?.slug || rp.author?._id}`}>{rp.author?.name}</Link>
                        </span>
                        <span className="mx-2">|</span>
                        <span>{formatDateSafe(rp?.createdAt || rp?.updatedAt || dateFromObjectId(rp?._id))}</span>
                        <span className="mx-2">|</span>
                        <span>{rp.readtimes || ' '} min</span>
                      </div>
                      <Link href={`/blog/${rp.slug}`}>
                        <h5 className="card-title">{rp.title}</h5>
                      </Link>
                      <p className="card-text">{rp.excerpt}</p>
                      <Link href={`/blog/${rp.slug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No related posts found. Check out some random posts instead.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

/* -----------------------------------------------------------------------------
   NOTE: Below is your old commented-out getStaticProps (kept intact per request).
   I have left it here so none of your original comments are missed.
   You had previously commented this block out; it's preserved exactly.
----------------------------------------------------------------------------- */

/*

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;
//   const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;
//   try {
//     const postRes = await fetch(`${blogApi}/${slug}`);
//     if (!postRes.ok) throw new Error('Failed to fetch post');
//     const post = await postRes.json();

//     const allRes = await fetch(blogApi);
//     let allPosts = [];
//     if (allRes.ok) {
//       allPosts = await allRes.json();
//     }
//     const sameCategoryPosts = allPosts.filter(
//       p => p.category._id === post.category._id && p._id !== post._id
//     );
//     let relatedPosts = [];
//     let relatedHeading = '';
//     if (sameCategoryPosts.length > 0) {
//       relatedHeading = 'Related Posts';
//       relatedPosts = sameCategoryPosts.slice(0, 3);
//     } else {
//       relatedHeading = 'Random Posts';
//       const randomPosts = allPosts.filter(p => p._id !== post._id);
//       relatedPosts = randomPosts.slice(0, 3);
//     }

//     const catRes = await fetch(categoryApi);
//     let categories = [];
//     if (catRes.ok) {
//       categories = await catRes.json();
//     }

//     return { props: { post, relatedPosts, relatedHeading, categories }, revalidate: 60 };
//   } catch (err) {
//     console.error(err);
//     return { props: { post: null, error: true, relatedPosts: [], categories: [] }, revalidate: 60 };
//   }
// }

// export default BlogPost;

*/

/* -----------------------------------------------------------------------------
   New getStaticPaths & getStaticProps (trimmed & safe)
----------------------------------------------------------------------------- */

// ---------- getStaticPaths (fetch slugs only) ----------
export async function getStaticPaths() {
  const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;
  try {
    // If your API supports field selection, use it (e.g. ?fields=slug). Fallback to full list otherwise.
    const res = await fetch(blogApi);
    if (!res.ok) {
      return { paths: [], fallback: 'blocking' };
    }
    const posts = await res.json();
    const paths = (posts || [])
      .filter((p) => p && p.slug)
      .map((post) => ({
        params: { slug: post.slug },
      }));

    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error('getStaticPaths error:', err);
    return { paths: [], fallback: 'blocking' };
  }
}

// ---------- getStaticProps ----------
export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;

  try {
    // Fetch the post by slug (full post)
    const postRes = await fetch(`${blogApi}/${slug}`);
    if (!postRes.ok) {
      return { notFound: true };
    }
    const post = await postRes.json();
    if (!post || Object.keys(post).length === 0) {
      return { notFound: true };
    }

    // ✅ add here (kept your original idea): ensure createdAt exists
    if (!post.createdAt) {
      post.createdAt = post.updatedAt || (post._id ? dateFromObjectId(post._id)?.toISOString() : undefined);
    }

    // Fetch all posts only to compute related posts — but trim them immediately
    const allRes = await fetch(blogApi);
    let allPosts = [];
    if (allRes.ok) {
      const rawAll = await allRes.json();
      // IMPORTANT: map to trimmed objects right away to avoid holding heavy content in memory/props
      allPosts = (rawAll || []).map(trimPostForList);
    }

    // Determine related posts (already trimmed)
    const sameCategoryPosts = allPosts.filter((p) => p?.category?._id === post?.category?._id && p._id !== post._id);
    let relatedPosts = [];
    let relatedHeading = '';
    if (sameCategoryPosts.length > 0) {
      relatedHeading = 'Related Posts';
      relatedPosts = sameCategoryPosts.slice(0, 3);
    } else {
      relatedHeading = 'Random Posts';
      relatedPosts = allPosts.filter((p) => p._id !== post._id).slice(0, 3);
    }

    // Fetch & trim categories
    const catRes = await fetch(categoryApi);
    let categories = [];
    if (catRes.ok) {
      const rawCats = await catRes.json();
      categories = (rawCats || []).map((c) => ({ _id: c._id, title: c.title, slug: c.slug }));
    }

    // Optional debug: measure serialized props size during static build
    // Uncomment to log size in KB during build (Node environment):
    /*
    try {
      const s = JSON.stringify({ post, relatedPosts, categories });
      const kb = Buffer.byteLength(s, 'utf8') / 1024;
      console.log(`props size (KB): ${kb.toFixed(2)}`);
    } catch (err) {
      // ignore
    }
    */

    return {
      props: { post, relatedPosts, relatedHeading, categories },
      revalidate: 60,
    };
  } catch (err) {
    console.error('getStaticProps error:', err);
    return { notFound: true };
  }
}

export default BlogPost;
