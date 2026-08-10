import Link from "next/link";
import Footer from "./components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e0f1a] text-white pt-28 pb-16 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto px-6 text-center my-auto">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold">Página no encontrada</h2>
        <p className="mt-2 text-gray-400">
          La página que estás buscando no existe o fue movida.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity inline-block"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
      <Footer lang="es" />
    </div>
  );
}
