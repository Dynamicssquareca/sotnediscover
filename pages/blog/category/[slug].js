import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// ---- date helpers ----
function dateFromObjectId(id) {
  if (!id || typeof id !== "string" || id.length < 8) return null;
  try {
    const seconds = parseInt(id.substring(0, 8), 16);
    return new Date(seconds * 1000);
  } catch {
    return null;
  }
}

function formatDateSafe(dateOrString, { fallback = "Date unknown" } = {}) {
  if (!dateOrString) return fallback;
  const d = dateOrString instanceof Date ? dateOrString : new Date(dateOrString);
  if (Number.isNaN(d.getTime())) return fallback;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
// -----------------------

const CategoryPage = ({ category, posts }) => {
  if (!category) return <p>Category not found</p>;

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}blog/category/${category.slug}/`;

  const buildImageUrl = (baseUrl, img) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `${baseUrl.replace(/\/$/, "")}/${img.replace(/^\//, "")}`;
  };

  const getImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image, img);

  const getProfileImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image_profilePics, img);

  // ---------- Load More Logic ----------
  const INITIAL_COUNT = 9;
  const LOAD_MORE_COUNT = 6;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
      setLoading(false);
    }, 500);
  };
  // -------------------------------------

  return (
    <>
      <Head>
        <title>{category.metaTitle || category.title}</title>
        <meta
          name="description"
          content={category.metaDescription || category.excerpt || ""}
        />
        <link rel="canonical" href={canonicalUrl} />
        {category.metaKeywords && (
          <meta name="keywords" content={category.metaKeywords} />
        )}
        <meta property="og:title" content={category.metaTitle || category.title} />
        <meta
          property="og:description"
          content={category.metaDescription || category.excerpt || ""}
        />
      </Head>

      <div className="container pb-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/blog/category">Categories</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {category.title}
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="common-title">
          <h1>Category: {category.title}</h1>
        </div>

        {posts.length === 0 ? (
          <p>No posts found for this category.</p>
        ) : (
          <>
            <div className="row">
              {posts.slice(0, visibleCount).map((post) => (
                <div key={post.slug} className="col-lg-4">
                  <div className="card-blog-02">
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

                    <div className="card-post-ava">
                      <Link
                        href={`/blog/author/${
                          post.author.slug || post.author._id
                        }`}
                      >
                        <Image
                          width={44}
                          height={44}
                          src={
                            post.author?.profilePic
                              ? getProfileImageUrl(post.author.profilePic)
                              : "/img/icons/user-avt.png"
                          }
                          alt="user avatar"
                          className="rounded-circle"
                        />
                        <div className="av-info">
                          <div className="av-name-a">
                            {post.author?.name || "Unknown"}
                          </div>
                          <div className="av-date-b">
                            {formatDateSafe(
                              post?.createdAt ||
                                post?.updatedAt ||
                                dateFromObjectId(post?._id)
                            )}
                            <span> | </span>
                            {post.readtimes || ""}min
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- Load More Button ---------- */}
            {visibleCount < posts.length && (
              <div className="text-center mt-4">
                {loading ? (
                  <div className="spinner-border" role="status"></div>
                ) : (
                  <button className="btn btn-primary" onClick={handleLoadMore}>
                    Load More
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;

  try {
    const res = await fetch(categoryApi);
    const categories = res.ok ? await res.json() : [];

    const paths = categories.map((cat) => ({
      params: { slug: cat.slug },
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
    const resCat = await fetch(categoryApi);
    const categories = resCat.ok ? await resCat.json() : [];

    const category = categories.find((c) => c.slug === slug) || null;
    if (!category) return { notFound: true };

    const resPosts = await fetch(blogApi);
    const posts = resPosts.ok ? await resPosts.json() : [];

    let filteredPosts = posts.filter(
      (post) => post.category && post.category._id === category._id
    );

    filteredPosts = filteredPosts.map((p) => {
      if (!p.createdAt) {
        p.createdAt =
          p.updatedAt ||
          (p._id ? dateFromObjectId(p._id)?.toISOString() : undefined);
      }
      return p;
    });

    return {
      props: { category, posts: filteredPosts },
      revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: { category: null, posts: [] },
      revalidate: 10,
    };
  }
}

export default CategoryPage;
