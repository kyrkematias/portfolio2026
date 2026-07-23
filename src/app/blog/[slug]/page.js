import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
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

  return {
    title: `${post.title} | Martín Matías Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        "es-AR": `/blog/${slug}`,
        "en-US": `/en/blog/entry`,
      },
    },
  };
}

export default async function BlogPostEs({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "es");

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white pt-28 pb-16 flex flex-col justify-between">
      <article className="max-w-3xl mx-auto px-6 w-full">
        <Link
          href="/blog"
          className="text-xs font-bold text-pink-400 hover:text-cyan-400 uppercase tracking-wider mb-6 inline-block"
        >
          ← Volver al Blog
        </Link>
        <span className="block text-xs text-gray-500 font-mono mb-2">
          {post.date}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="mt-8 text-gray-300 space-y-4 font-light leading-relaxed whitespace-pre-line border-t border-[#2c2f3a] pt-8">
          {post.content}
        </div>
      </article>

      <Footer lang="es" />
    </div>
  );
}
