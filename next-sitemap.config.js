/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.stonediscover.com/",        // ← replace with your domain
  generateRobotsTxt: false,
  generateIndexSitemap: false,              // ONLY one sitemap.xml
  sitemapSize: 50000,                       // prevent splitting

  // 🔥 EXCLUDE ROUTES
  exclude: [
    "/admin/*",
    "/dashboard/*",
    "/private-page",
    "/secret",
    "/blog/preview*",
    "/test/*",
  ],
};
