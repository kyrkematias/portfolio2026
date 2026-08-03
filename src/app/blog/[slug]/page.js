import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import BlogContactCTA from "../../components/BlogContactCTA";
import PostContent from "../../components/PostContent";
import RelatedPosts from "../../components/RelatedPosts";
import JsonLd from "../../components/JsonLd";
import { getPostBySlug, getPosts } from "../../data/blogData";

export async function generateStaticParams() {
  const posts = getPosts("es");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "es");
  if (!post) return {};

  const altSlug = post.alternateSlug || "entry";
  const postImage = post.image
    ? `https://www.martinmatias.com.ar${post.image}`
    : "https://www.martinmatias.com.ar/og-image.png";

  return {
    title: `${post.title} | Martín Matías Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        "es-AR": `/blog/${slug}`,
        "en-US": `/en/blog/${altSlug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Martín Matías Blog`,
      description: post.excerpt,
      url: `https://www.martinmatias.com.ar/blog/${slug}`,
      siteName: "Martín Matías",
      locale: "es_AR",
      alternateLocale: ["en_US"],
      type: "article",
      publishedTime: post.date,
      authors: ["Martín Matías"],
      tags: post.tags || [],
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Martín Matías Blog`,
      description: post.excerpt,
      images: [postImage],
    },
  };
}

export default async function BlogPostEs({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "es");

  if (!post) {
    notFound();
  }

  const articleUrl = `https://www.martinmatias.com.ar/blog/${slug}`;
  const imageUrl = post.image
    ? `https://www.martinmatias.com.ar${post.image}`
    : "https://www.martinmatias.com.ar/og-image.png";

  const postSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": [imageUrl],
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": "Martín Matías",
        "url": "https://www.martinmatias.com.ar",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Martín Matías",
        "url": "https://www.martinmatias.com.ar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.martinmatias.com.ar/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl,
      },
      "keywords": post.tags ? post.tags.join(", ") : "",
      "articleSection": post.category || "Desarrollo Web & SEO",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.martinmatias.com.ar",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.martinmatias.com.ar/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": articleUrl,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white pt-28 pb-16 flex flex-col justify-between">
      <JsonLd data={postSchema} />
      <article className="max-w-3xl mx-auto px-6 w-full">
        <Link
          href="/blog"
          className="text-xs font-bold text-pink-400 hover:text-cyan-400 uppercase tracking-wider mb-6 inline-block transition-colors"
        >
          ← Volver al Blog
        </Link>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {post.category && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {post.category}
            </span>
          )}
          <span className="text-xs text-gray-500 font-mono">
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {post.image && (
          <div className="relative w-full max-w-md mx-auto aspect-square mt-8 rounded-2xl overflow-hidden border border-[#2c2f3a] shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <PostContent content={post.content} />
        
        {/* Related Posts Section */}
        <RelatedPosts currentSlug={slug} lang="es" />

        <BlogContactCTA lang="es" />
      </article>

      <Footer lang="es" />
    </div>
  );
}
