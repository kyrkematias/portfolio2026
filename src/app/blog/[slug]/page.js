import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import BlogContactCTA from "../../components/BlogContactCTA";
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
  };
}

function PostContent({ content }) {
  const paragraphs = content.split("\n\n").filter(Boolean);
  return (
    <div className="mt-8 text-gray-300 space-y-5 font-light leading-relaxed border-t border-[#2c2f3a] pt-8">
      {paragraphs.map((p, idx) => {
        const trimmed = p.trim();
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-bold text-cyan-400 pt-4 pb-1">
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-lg font-semibold text-pink-400 pt-3 pb-1">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white pt-4 pb-2">
              {trimmed.replace(/^#\s+/, "")}
            </h1>
          );
        }
        return (
          <p key={idx} className="whitespace-pre-line">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
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
          className="text-xs font-bold text-pink-400 hover:text-cyan-400 uppercase tracking-wider mb-6 inline-block transition-colors"
        >
          ← Volver al Blog
        </Link>
        <span className="block text-xs text-gray-500 font-mono mb-2">
          {post.date}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          {post.title}
        </h1>

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
        <BlogContactCTA lang="es" />
      </article>

      <Footer lang="es" />
    </div>
  );
}
