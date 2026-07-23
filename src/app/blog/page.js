import Link from "next/link";
import Footer from "../components/footer";
import { getPosts } from "../data/blogData";

export const metadata = {
  title: "Blog de Desarrollo Web & SEO | Martín Matías",
  description:
    "Artículos sobre desarrollo frontend, optimización SEO técnica, velocidad de carga y mejores prácticas web.",
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
          Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Artículos</span>
        </h1>
        <p className="mt-4 text-gray-400 text-base font-light">
          Novedades, guías y estrategias sobre desarrollo web moderno, SEO técnico y optimización de rendimiento.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-[#2c2f3a] bg-[#121324] hover:border-pink-500/50 transition-all duration-300 group"
            >
              <span className="text-xs text-pink-400 font-mono">{post.date}</span>
              <h2 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer lang="es" />
    </div>
  );
}
