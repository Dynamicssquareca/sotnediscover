const path = require('path');

module.exports = {
  siteUrl: 'https://www.stonediscover.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  outDir: './public',
  sourceDir: path.resolve(__dirname, '.next'),

  exclude: [
    '/blog/preview*',
    '/blog/tag*',
    '/blog/category*',
    '/blog/author*',
    '/thank-you',
    "/natural-stones",
    "/natural-stones*",
  ],

  additionalPaths: async (config) => {
    const res = await fetch(
      'https://stonediscoverusaapi.onrender.com/api/frontend/categories/'
    );
    const categories = await res.json();

    const urls = [];

    for (const cat of categories) {
      // 🚫 SKIP natural-stones COMPLETELY
      const excludedSlugs = ['natural-stones', 'information'];

      if (excludedSlugs.includes(cat.slug)) continue;

      // ✅ category page
      urls.push(`/${cat.slug}/`);

      // ✅ subcategories
      if (Array.isArray(cat.subcategories)) {
        for (const sub of cat.subcategories) {
          if (cat.slug === 'location') {
            // location → city pages
            urls.push(`/location/${sub.slug}/`);
          } else {
            // normal category inner pages
            urls.push(`/${cat.slug}/${sub.slug}/`);
          }
        }
      }
    }

    // optional static pages
    const staticUrls = [
      // '/catalog-download/',
      // '/contact-us/',
    ];

    const allUrls = [...new Set([...urls, ...staticUrls])];

    return Promise.all(
      allUrls.map((url) => config.transform(config, url))
    );
  },
};
