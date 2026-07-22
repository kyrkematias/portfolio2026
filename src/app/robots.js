export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://www.martinmatias.com.ar/sitemap.xml",
  };
}
