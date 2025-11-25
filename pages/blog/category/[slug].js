import React, { useState } from "react";
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

  // ---------- Load More ----------
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
      </Head>

      <div className="container pb-80">
        <div className="breadcrumb-list">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
            <li className="breadcrumb-item"><a href="/blog/category">Categories</a></li>
            <li className="breadcrumb-item active">{category.title}</li>
          </ol>
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
                        href={`/blog/author/${post.author.slug || post.author._id}`}
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

// -----------------------------------------------------
// FIX: REDUCE PAGE-DATA SIZE
// Remove large fields from posts BEFORE returning props
// -----------------------------------------------------

export async function getStaticPaths() {
  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;

  try {
    const res = await fetch(categoryApi);
    const categories = res.ok ? await res.json() : [];

    const paths = categories.map((cat) => ({
      params: { slug: cat.slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const categoryApi = process.env.NEXT_PUBLIC_CATEGORY_API_URL;

  const filteredPostsApi =
    `${process.env.NEXT_PUBLIC_BLOG_API_URL}?categorySlug=${slug}`;

  try {
    const resCat = await fetch(categoryApi);
    const categories = resCat.ok ? await resCat.json() : [];

    const category = categories.find((c) => c.slug === slug) || null;
    if (!category) return { notFound: true };

    const resPosts = await fetch(filteredPostsApi);
    const postsRaw = resPosts.ok ? await resPosts.json() : [];

    // ⭐ STRIP HEAVY FIELDS HERE
    const posts = postsRaw.map((p) => ({
      _id: p._id,
      slug: p.slug,
      title: p.title,
      banner: p.banner || "",
      readtimes: p.readtimes || "",
      createdAt: p.createdAt || p.updatedAt || null,
      author: {
        name: p.author?.name || "",
        slug: p.author?.slug || "",
        profilePic: p.author?.profilePic || "",
      },
    }));

    return {
      props: { category, posts },
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
