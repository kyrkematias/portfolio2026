import { getPosts } from "./data/blogData";

export default function sitemap() {
  const baseUrl = "https://www.martinmatias.com.ar";
  const lastModified = new Date();

  const esPosts = getPosts("es").map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const enPosts = getPosts("en").map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...esPosts,
    ...enPosts,
  ];
}
