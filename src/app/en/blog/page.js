import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import { getPosts } from "../../data/blogData";

export const metadata = {
  title: "Web Development & SEO Blog | Martín Matías",
  description:
    "Articles on frontend development, technical SEO optimization, web speed, and digital growth.",
  alternates: {
    canonical: "/en/blog",
    languages: {
      "es-AR": "/blog",
      "en-US": "/en/blog",
    },
  },
};

export default function BlogIndexEn() {
  const posts = getPosts("en");

  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white pt-28 pb-16 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Articles</span>
        </h1>
        <p className="mt-4 text-gray-400 text-base font-light">
          Insights, guides, and strategies on modern web development, technical SEO, and web performance optimization.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/en/blog/${post.slug}`}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl border border-[#2c2f3a] bg-[#121324] hover:border-pink-500/50 transition-all duration-300 group overflow-hidden shadow-lg"
            >
              {post.image && (
                <div className="relative w-full sm:w-44 h-44 shrink-0 rounded-xl overflow-hidden border border-[#2c2f3a] aspect-square">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  {post.category && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {post.category}
                    </span>
                  )}
                  <span className="text-xs text-pink-400 font-mono">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-sm mt-2 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer lang="en" />
    </div>
  );
}
