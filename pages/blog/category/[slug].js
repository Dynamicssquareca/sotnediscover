import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// ---- date helpers ----
function dateFromObjectId(id) {
  if (!id || typeof id !== 'string' || id.length < 8) return null;
  try {
    const seconds = parseInt(id.substring(0, 8), 16);
    return new Date(seconds * 1000);
  } catch {
    return null;
  }
}

function formatDateSafe(dateOrString, { fallback = 'Date unknown' } = {}) {
  if (!dateOrString) return fallback;
  const d = dateOrString instanceof Date ? dateOrString : new Date(dateOrString);
  if (Number.isNaN(d.getTime())) return fallback;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
// -----------------------

const CategoryPage = ({ category, posts }) => {
  if (!category) return <p>Category not found</p>;
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}blog/category/${category.slug || category.title.toLowerCase().replace(/\s+/g, '-')}/`;

  const buildImageUrl = (baseUrl, img) => {
    if (!img) return '';
    if (img.startsWith('http')) return img;
    return `${baseUrl.replace(/\/$/, '')}/${img.replace(/^\//, '')}`;
  };

  const getImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image, img);

  const getProfileImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image_profilePics, img);

  return (
    <>
      <Head>
        <title>{category.metaTitle || category.title}</title>
        <meta name="description" content={category.metaDescription || category.excerpt || ''} />
        <link rel="canonical" href={canonicalUrl} />
        {category.metaKeywords && <meta name="keywords" content={category.metaKeywords} />}
        <meta property="og:title" content={category.metaTitle || category.title} />
        <meta property="og:description" content={category.metaDescription || category.excerpt || ''} />
      </Head>

      <div className="container pb-80">
        <div className='row'>
          <div className='col-lg-12'>
            <div className="breadcrumb-list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
                <li className="breadcrumb-item"><a href="/blog/category">Categories</a></li>
                <li className="breadcrumb-item active" aria-current="page">{category.title}</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='common-title'>
          <h1>Category: {category.title}</h1>
        </div>

        {posts.length === 0 ? (
          <p>No posts found for this category.</p>
        ) : (
          <div className="row">
            {posts.map(post => (
              <div key={post.slug} className='col-lg-4'>
                <div className='card-blog-02'>
                  <div className="card-title">
                    <Link href={`/blog/${post.slug}`}>
                      {post.banner && (
                        <Image
                          src={getImageUrl(post.banner)}
                          alt={post.title}
                          className="img-fluid"
                          width={400}
                          height={300}
                        />
                      )}
                      <h3>{post.title}</h3>
                    </Link>
                  </div>
                  <div className='card-post-ava'>
                    <Link href={`/blog/author/${post.author.slug || post.author._id}`}>
                      <Image
                        width={44}
                        height={44}
                        src={post.author?.profilePic ? getProfileImageUrl(post.author.profilePic) : '/img/icons/user-avt.png'}
                        alt="user avatar"
                        className='rounded-circle'
                      />
                      <div className='av-info'>
                        <div className='av-name-a'>{post.author?.name || 'Unknown'}</div>
                        <div className='av-date-b'>
                          {formatDateSafe(post?.createdAt || post?.updatedAt || dateFromObjectId(post?._id))}
                          <span> | </span>
                          {post.readtimes || ''}
                          {/* <span>min</span> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;
  try {
    const res = await fetch(categoryApi);
    let categories = [];
    if (res.ok) {
      categories = await res.json();
    }
    const paths = (categories || []).map(cat => ({
      params: { slug: cat.slug || cat.title.toLowerCase().replace(/\s+/g, '-') }
    }));
    return { paths, fallback: true };
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;
  const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;
  try {
    const catRes = await fetch(categoryApi);
    let categories = [];
    if (catRes.ok) {
      categories = await catRes.json();
    }
    const category = (categories || []).find(cat => (cat.slug || cat.title.toLowerCase().replace(/\s+/g, '-')) === slug) || null;
    if (!category) return { notFound: true };

    const postRes = await fetch(blogApi);
    let posts = [];
    if (postRes.ok) {
      posts = await postRes.json();
    }

    // Filter posts for this category
    let filteredPosts = (posts || []).filter(post => post.category && post.category._id === category._id);

    // Normalize each post's createdAt (createdAt > updatedAt > derived from _id)
    filteredPosts = filteredPosts.map(p => {
      if (!p.createdAt) {
        p.createdAt = p.updatedAt || (p._id ? dateFromObjectId(p._id)?.toISOString() : undefined);
      }
      return p;
    });

    return { props: { category, posts: filteredPosts }, revalidate: 10 };
  } catch (err) {
    console.error(err);
    return { props: { category: null, posts: [] }, revalidate: 10 };
  }
}

export default CategoryPage;
