import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import { getPosts } from "../data/blogData";

export const metadata = {
  title: "Blog de Desarrollo Web & SEO | Martín Matías",
  description:
    "Artículos sobre desarrollo frontend, optimización SEO técnica y mejores prácticas web.",
  alternates: {
    canonical: "/blog",
    languages: {
      "es-AR": "/blog",
      "en-US": "/en/blog",
    },
  },
};

export default function BlogIndexEs() {
  const posts = getPosts("es");

  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white pt-28 pb-16 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Blog &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Artículos
          </span>
        </h1>
        <p className="mt-4 text-gray-400 text-base font-light">
          Novedades, guías y estrategias sobre desarrollo web moderno, SEO
          técnico y optimización de rendimiento.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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
                <span className="text-xs text-pink-400 font-mono">
                  {post.date}
                </span>
                <h2 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-sm mt-2 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer lang="es" />
    </div>
  );
}
