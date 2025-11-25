import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

// --- New: lightweight summarizer to keep page-data small ---
function summarizePost(p) {
  return {
    _id: p._id,
    slug: p.slug,
    title: p.title,
    excerpt:
      p.excerpt || (p.content ? p.content.replace(/<[^>]+>/g, '').slice(0, 150) + (p.content && p.content.length > 150 ? '...' : '') : ''),
    banner: p.bannerThumbnail || p.banner || null,
    metaimage: p.metaimage || null,
    author: {
      _id: p.author?._id,
      name: p.author?.name || 'Unknown',
      slug: p.author?.slug,
      profilePic: p.author?.profilePic || null,
    },
    createdAt: p.createdAt || p.updatedAt || (p._id ? dateFromObjectId(p._id)?.toISOString() : undefined),
    readtimes: p.readtimes || '',
  };
}

const PLACEHOLDER = `${process.env.NEXT_PUBLIC_SITE_URL || ''}img/default-thumb.jpg`;

const BlogIndex = ({ posts, categories }) => {
  // "All" is default; visiblePostsCount controls "Load More"
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePostsCount, setVisiblePostsCount] = useState(6);

  // Hero: first post; Most Recent: rest of posts (filtered if category selected)
  const latestPost = posts.length > 0 ? posts[0] : null;

  const filteredPosts =
    selectedCategory === 'all'
      ? posts.length > 1
        ? posts.slice(1)
        : []
      : posts.filter((post) => post.category && post.category._id === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visiblePostsCount);

  // Build image URL but return a safe placeholder when missing
  const buildImageUrl = (baseUrl, img) => {
    if (!img) return PLACEHOLDER;
    if (typeof img !== 'string') return PLACEHOLDER;
    if (img.startsWith('http')) return img;
    if (!baseUrl) return img.startsWith('/') ? img : `/${img}`;
    return `${baseUrl.replace(/\/$/, '')}/${img.replace(/^\//, '')}`;
  };

  const getImageUrl = (img) => buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image, img);

  const getProfileImageUrl = (img) => buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image_profilePics, img);

  const getExcerpt = (post) => {
    if (post.excerpt) return post.excerpt;
    if (post.content) {
      const plainText = post.content.replace(/<[^>]+>/g, '');
      return plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');
    }
    return '';
  };

  const getAuthorName = (post) => (post.author && post.author.name ? post.author.name : 'Unknown');

  // Helper function to limit the title to a specific character count (default 50)
  const limitTitle = (title, limit = 50) => {
    if (!title) return '';
    return title.length > limit ? title.substring(0, limit) + '...' : title;
  };

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || ''}blog/`;

  return (
    <>
      <Head>
        <title>Wholesale Memorial Headstones Guides | Stone Discover UK</title>
        <meta
          name="description"
          content="Explore wholesale memorial headstone guides with Stone Discover UK. Resources for funeral trade, stonemasons & retailers to choose the best."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Blog Hero Section */}
      <div className="blog-hero">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left: Latest Post */}
            <div className="col-xl-8">
              <div className="blog-lates-card-one">
                <span>Latest</span>
                {latestPost && (
                  <a href={`/blog/${latestPost.slug}`}>
                    <h1>{limitTitle(latestPost.title, 80)}</h1>
                  </a>
                )}
                {latestPost && (
                  <div className="pic-poster-blog mt-3">
                    <a href={`/blog/author/${latestPost.author?.slug || latestPost.author?._id}`}>
                      <Image
                        width={64}
                        height={64}
                        src={
                          latestPost.author?.profilePic
                            ? getProfileImageUrl(latestPost.author.profilePic)
                            : '/img/icons/user-avt.png'
                        }
                        alt="user avatar"
                        className="rounded-circle"
                      />
                    </a>
                    <div className="av-info">
                      <div className="av-name">
                        <a href={`/blog/author/${latestPost.author?.slug || latestPost.author?._id}`}>{getAuthorName(latestPost)}</a>
                      </div>
                      <div className="av-date">
                        {formatDateSafe(latestPost?.createdAt || latestPost?.updatedAt || dateFromObjectId(latestPost?._id))}{' '}
                        <span className="m-22">|</span> {latestPost.readtimes || 'read time'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="new-imag">
                {latestPost && (
                  <a href={`/blog/${latestPost.slug}`}>
                    <Image
                      src={
                        latestPost.metaimage
                          ? getImageUrl(latestPost.metaimage)
                          : `${process.env.NEXT_PUBLIC_SITE_URL || ''}img/sdie-pop.png`
                      }
                      alt={latestPost.title}
                      className="img-fluid"
                      width={1200}
                      height={628}
                      priority // keep priority only on hero image
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Recent Section */}
      <section className="py-4 p-t-60">
        <div className="container">
          <div className="row mb-1">
            <div className="col-12">
              <div className="blog-section-title">
                <h2>All Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {visiblePosts.length ? (
              visiblePosts.map((post) => (
                <div key={post.slug} className="col-lg-4">
                  <div className="card-blog-02">
                    <div className="card-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.banner && (
                          <Image src={getImageUrl(post.banner)} alt={post.title} className="img-fluid" width={400} height={300} />
                        )}
                        <h3>{post.title}</h3>
                      </Link>
                    </div>
                    <div className="card-post-ava">
                      <Link href={`/blog/author/${post.author?.slug || post.author?._id}`}>
                        <Image
                          width={44}
                          height={44}
                          src={post.author?.profilePic ? getProfileImageUrl(post.author.profilePic) : '/img/icons/user-avt.png'}
                          alt="user avatar"
                          className="rounded-circle"
                        />
                        <div className="av-info">
                          <div className="av-name-a">{post.author && post.author.name ? post.author.name : 'Unknown'}</div>
                          <div className="av-date-b">
                            {formatDateSafe(post?.createdAt || post?.updatedAt || dateFromObjectId(post?._id))} <span>|</span>{' '}
                            {post.readtimes || ''}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts found for this category.</p>
            )}
          </div>
          {filteredPosts.length > visiblePostsCount && (
            <div className="text-center">
              <button className="btn btn-primary" onClick={() => setVisiblePostsCount(visiblePostsCount + 3)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;
  try {
    const [blogRes, categoryRes] = await Promise.all([fetch(blogApi), fetch(categoryApi)]);
    if (!blogRes.ok) throw new Error('Failed to fetch posts');

    let postsRaw = await blogRes.json();
    postsRaw = Array.isArray(postsRaw) ? postsRaw : [];

    // Summarize posts server-side to reduce page-data size
    const postsSummarized = postsRaw.map((p) => summarizePost(p));

    // Sort posts by createdAt (newest first). If createdAt still missing, fallback to updatedAt or _id time.
    postsSummarized.sort((a, b) => {
      const aDate = new Date(a.createdAt || a.updatedAt || (a._id ? dateFromObjectId(a._id) : null));
      const bDate = new Date(b.createdAt || b.updatedAt || (b._id ? dateFromObjectId(b._id) : null));
      return bDate - aDate;
    });

    let categories = [];
    if (categoryRes.ok) {
      categories = await categoryRes.json();
    }

    // Keep only the first N posts for the index payload to keep the page small.
    const indexLimit = 12; // configurable: choose small number to keep page-data light
    const postsForIndex = postsSummarized.slice(0, indexLimit);

    return { props: { posts: postsForIndex, categories }, revalidate: 60 };
  } catch (err) {
    console.error('Error fetching data:', err);
    return { props: { posts: [], categories: [] }, revalidate: 60 };
  }
}

export default BlogIndex;
