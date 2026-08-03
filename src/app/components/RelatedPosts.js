import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag, Calendar } from "lucide-react";
import { getRelatedPosts } from "../data/blogData";

export default function RelatedPosts({ currentSlug, lang = "es" }) {
  const relatedPosts = getRelatedPosts(currentSlug, lang, 2);

  if (!relatedPosts || relatedPosts.length === 0) return null;

  const isEs = lang === "es";

  const labels = {
    tag: isEs ? "RECOMENDADOS" : "RECOMMENDED",
    title: isEs ? "Artículos Relacionados" : "Related Articles",
    subtitle: isEs
      ? "Explora más contenidos seleccionados sobre SEO, Inteligencia Artificial y Desarrollo Web."
      : "Explore more curated content on SEO, Artificial Intelligence, and Web Development.",
    readMore: isEs ? "Leer artículo" : "Read article",
  };

  return (
    <div className="mt-16 pt-12 border-t border-[#2c2f3a]">
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-xs font-mono tracking-widest text-pink-400 uppercase font-semibold block mb-1">
          {labels.tag}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {labels.title}
        </h3>
        <p className="mt-2 text-gray-400 text-sm font-light max-w-xl">
          {labels.subtitle}
        </p>
      </div>

      {/* Related Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => {
          const href = isEs ? `/blog/${post.slug}` : `/en/blog/${post.slug}`;
          return (
            <div
              key={post.slug}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-[#2c2f3a] bg-[#121324] hover:border-pink-500/50 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div>
                {/* Image */}
                {post.image && (
                  <div className="relative w-full aspect-[16/9] mb-5 rounded-xl overflow-hidden border border-[#2c2f3a]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.category && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  <Link href={href}>{post.title}</Link>
                </h4>

                {/* Excerpt */}
                <p className="mt-2.5 text-gray-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, idx) => (
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

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
                >
                  <span>{labels.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
