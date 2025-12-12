/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.stonediscover.com/",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,

  exclude: [
    "/blog/preview*",
    "/blog/tag*",
    "/blog/category*",
    "/blog/author*",
  ],

  additionalPaths: async (config) => {
    // Add as many manual URLs as you want
    const manualUrls = [
    //   "/page-1"
    ];

    return manualUrls.map((url) => config.transform(config, url));
  },
};
