// pages/blog/author/[slug].js

import React, { useState } from "react";
import { useRouter } from "next/router";
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

export default function AuthorPage({ author, posts = [] }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status"></div>
        <p className="mt-3">Loading Author...</p>
      </div>
    );
  }

  if (!author) return <p>Author not found</p>;

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}blog/author/${author.slug}/`;

  const buildImageUrl = (baseUrl, img) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    if (!baseUrl) return img;
    return `${baseUrl.replace(/\/$/, "")}/${img.replace(/^\//, "")}`;
  };

  const getImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image, img);

  const getProfileImageUrl = (img) =>
    buildImageUrl(process.env.NEXT_PUBLIC_BLOG_API_Image_profilePics, img);

  // -----------------------------
  // LOAD MORE LOGIC
  // -----------------------------
  const INITIAL_LOAD = 9;
  const LOAD_MORE_COUNT = 6;

  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [loading, setLoading] = useState(false);

  const visiblePosts = posts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
      setLoading(false);
    }, 700);
  };

  const hasMore = visibleCount < posts.length;

  // -----------------------------

  return (
    <>
      <Head>
        <title>{author.name} - Author - My App</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="container pb-80">
        {/* Breadcrumb */}
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blog/author">Authors</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {author.name}
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Author Header */}
        <div className="row pd-90">
          <div className="col-md-2">
            <div className="auther-inner">
              <Image
                src={
                  author.profilePic
                    ? getProfileImageUrl(author.profilePic)
                    : "/img/icons/user-avt.png"
                }
                width={100}
                height={100}
                alt={author.name}
                className="img-fluid rounded-circle"
              />
            </div>
          </div>

          <div className="col-md-10">
            <div className="common-titles">
              <h1>{author.name}</h1>
              <p>{author.aboutus}</p>
            </div>
          </div>
        </div>

        <div className="common-title-two">
          <h2>Posts by {author.name}</h2>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p>No posts found for this author.</p>
        ) : (
          <>
            <div className="row">
              {visiblePosts.map((post) => {
                const postAuthor = post.author || {};
                const slug =
                  postAuthor.slug || postAuthor._id || "unknown-author";

                return (
                  <div key={post.slug} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card-blog-02">
                      <div className="card-title">
                        <Link href={`/blog/${post.slug}`}>
                          {post.banner && (
                            <Image
                              src={getImageUrl(post.banner)}
                              alt={post.title}
                              width={400}
                              height={300}
                              className="img-fluid"
                            />
                          )}
                          <h3>{post.title}</h3>
                        </Link>
                      </div>

                      <div className="card-post-ava">
                        <Link href={`/blog/author/${slug}`}>
                          <Image
                            width={44}
                            height={44}
                            src={
                              postAuthor.profilePic
                                ? getProfileImageUrl(postAuthor.profilePic)
                                : "/img/icons/user-avt.png"
                            }
                            alt="user avatar"
                            className="rounded-circle"
                          />

                          <div className="av-info">
                            <div className="av-name-a">
                              {postAuthor.name || "Unknown"}
                            </div>

                            <div className="av-date-b">
                              {formatDateSafe(
                                post.createdAt ||
                                  dateFromObjectId(post?._id)
                              )}
                              <span> | </span>
                              {post.readtimes || "0"} min
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center mt-4">
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleLoadMore}
                    className="btn btn-primary px-4 py-2"
                  >
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
}

/* ---------------------------------------------------
   STATIC PATHS
----------------------------------------------------- */
export async function getStaticPaths() {
  const api = process.env.NEXT_PUBLIC_AUTHOR_API_URL;

  try {
    const res = await fetch(api);
    const authors = res.ok ? await res.json() : [];

    const paths = authors.map((a) => ({
      params: { slug: a.slug },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (e) {
    return { paths: [], fallback: "blocking" };
  }
}

/* ---------------------------------------------------
   STATIC PROPS — OPTIMIZED (NO LARGE PAYLOAD)
----------------------------------------------------- */
export async function getStaticProps({ params }) {
  const { slug } = params;

  const authorApi = process.env.NEXT_PUBLIC_AUTHOR_API_URL;
  const blogApi = process.env.NEXT_PUBLIC_BLOG_API_URL;

  try {
    // Authors
    const resAuthors = await fetch(authorApi);
    const authors = resAuthors.ok ? await resAuthors.json() : [];
    const author = authors.find((a) => a.slug === slug) || null;

    if (!author) return { notFound: true };

    // Posts
    const resPosts = await fetch(blogApi);
    let posts = resPosts.ok ? await resPosts.json() : [];

    // Filter and **minimize payload**
    posts = posts
      .filter(
        (p) =>
          p.author &&
          (p.author.slug === slug || p.author._id === author._id)
      )
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        banner: p.banner,
        createdAt:
          p.createdAt ||
          p.updatedAt ||
          dateFromObjectId(p._id)?.toISOString() ||
          null,
        readtimes: p.readtimes || 0,
        author: {
          name: p.author.name,
          slug: p.author.slug,
          profilePic: p.author.profilePic,
        },
      }));

    return {
      props: { author, posts },
      revalidate: 10,
    };
  } catch (e) {
    return { props: { author: null, posts: [] }, revalidate: 10 };
  }
}
