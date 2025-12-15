/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.stonediscover.com",
  generateRobotsTxt: true, // ✅ Recommended to enable, unless you create robots.txt manually
  generateIndexSitemap: false,
  sitemapSize: 50000,

  exclude: [
    "/blog/preview*",
    "/blog/tag*",
    "/blog/category*",
    "/blog/author*",
    "/natural-stones",
    "/natural-stones/*",
  ],

  additionalPaths: async (config) => {
    // ✅ Add manual URLs here
    const manualUrls = [
      "/tombstones-monuments/angel/",
      "/tombstones-monuments/bespoke/",
      "/tombstones-monuments/bevel-markers/",
      "/tombstones-monuments/book/",
      "/tombstones-monuments/columbarium/",
      "/tombstones-monuments/flat/",
      "/tombstones-monuments/vases/",
      "/tombstones-monuments/headstones/",
      "/tombstones-monuments/kerb-sets/",
      "/tombstones-monuments/bench/",
      "/tombstones-monuments/plaques/",
      "/tombstones-monuments/urns/",
      "/tombstones-monuments/pet/",
      "/tombstones-monuments/slant/",
      "/tombstones-monuments/upright/",
      "/location/headstones-in-atlanta-georgia/",
      "/location/brooklyn/",
      "/location/detroit/",
      "/location/los-angeles/",
      "/location/lubbock/",
      "/location/orlando/",
    ];

    return manualUrls.map((url) => config.transform(config, url));
  },
};
