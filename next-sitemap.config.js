const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.stonediscover.com",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  outDir: './public', // ✅ puts sitemap in /public
  sourceDir: path.resolve(__dirname, '.next'), // ✅ ensures it finds build files

  exclude: [
    "/blog/preview*",
    "/blog/tag*",
    "/blog/category*",
    "/blog/author*",
    "/natural-stones",
    "/natural-stones*",
    "/thank-you",
    "/location",
    "/location*"
  ],

  additionalPaths: async (config) => {
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
      // "/location/atlanta/",
      // "/location/brooklyn/",
      // "/location/detroit/",
      // "/location/los-angeles/",
      // "/location/lubbock/",
      // "/location/orlando/",
    ];

    // ✅ Make sure to await or return a resolved promise
    const results = await Promise.all(
      manualUrls.map((url) => config.transform(config, url))
    );

    return results;
  },
};
