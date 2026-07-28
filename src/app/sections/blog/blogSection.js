"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { getPosts } from "../../data/blogData";
import { getDictionary } from "../../data/dictionary";

export default function BlogSection({ lang = "es" }) {
  const dict = getDictionary(lang);
  const b = dict.blogSection;

  const posts = getPosts(lang);
  const latestPost = posts && posts.length > 0 ? posts[0] : null;

  if (!latestPost) return null;

  const blogHref = lang === "en" ? "/en/blog" : "/blog";
  const postHref =
    lang === "en"
      ? `/en/blog/${latestPost.slug}`
      : `/blog/${latestPost.slug}`;

  return (
    <section className="bg-[#0e0f1a] px-6 md:px-20 py-16 md:py-24" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-pink-400 uppercase mb-2">
            {b.tag}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {b.title}
          </h3>
          <p className="mt-3 text-gray-400 text-base font-light max-w-2xl">
            {b.subtitle}
          </p>
        </motion.div>

        {/* Featured Latest Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-[1px] rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-400/30 shadow-2xl overflow-hidden group"
        >
          <div className="bg-[#121324]/90 backdrop-blur-md rounded-[23px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Post Image */}
            {latestPost.image && (
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:border-pink-500/30 transition-colors duration-300">
                <Image
                  src={latestPost.image}
                  alt={latestPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Post Details */}
            <div className={`flex flex-col justify-between ${latestPost.image ? "lg:col-span-7" : "lg:col-span-12"}`}>
              <div>
                {/* Badge & Date */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    <BookOpen className="w-3.5 h-3.5" />
                    {b.latestBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    {latestPost.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  <Link href={postHref}>{latestPost.title}</Link>
                </h4>

                {/* Excerpt */}
                <p className="mt-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed line-clamp-3">
                  {latestPost.excerpt}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={postHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>{b.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={blogHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 text-sm font-semibold transition-all duration-300"
                >
                  <span>{b.viewAll}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
