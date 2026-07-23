"use client";
import { usePathname, useRouter } from "next/navigation";

export function ArgentinaFlag({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#74acdf" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <circle cx="320" cy="240" r="30" fill="#f6b40e" />
        <circle cx="320" cy="240" r="14" fill="#844a00" />
        <circle cx="320" cy="240" r="10" fill="#f6b40e" />
      </g>
    </svg>
  );
}

export function UsaFlag({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          fill="#fff"
          d="M0 36.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.9h640v36.9H0zm0 73.8h640v36.9H0z"
        />
        <path fill="#192f5d" d="M0 0h280v258.5H0z" />
        <g fill="#fff">
          <circle cx="28" cy="20" r="7" />
          <circle cx="76" cy="20" r="7" />
          <circle cx="124" cy="20" r="7" />
          <circle cx="172" cy="20" r="7" />
          <circle cx="220" cy="20" r="7" />
          <circle cx="52" cy="46" r="7" />
          <circle cx="100" cy="46" r="7" />
          <circle cx="148" cy="46" r="7" />
          <circle cx="196" cy="46" r="7" />
          <circle cx="244" cy="46" r="7" />
          <circle cx="28" cy="72" r="7" />
          <circle cx="76" cy="72" r="7" />
          <circle cx="124" cy="72" r="7" />
          <circle cx="172" cy="72" r="7" />
          <circle cx="220" cy="72" r="7" />
          <circle cx="52" cy="98" r="7" />
          <circle cx="100" cy="98" r="7" />
          <circle cx="148" cy="98" r="7" />
          <circle cx="196" cy="98" r="7" />
          <circle cx="244" cy="98" r="7" />
          <circle cx="28" cy="124" r="7" />
          <circle cx="76" cy="124" r="7" />
          <circle cx="124" cy="124" r="7" />
          <circle cx="172" cy="124" r="7" />
          <circle cx="220" cy="124" r="7" />
          <circle cx="52" cy="150" r="7" />
          <circle cx="100" cy="150" r="7" />
          <circle cx="148" cy="150" r="7" />
          <circle cx="196" cy="150" r="7" />
          <circle cx="244" cy="150" r="7" />
          <circle cx="28" cy="176" r="7" />
          <circle cx="76" cy="176" r="7" />
          <circle cx="124" cy="176" r="7" />
          <circle cx="172" cy="176" r="7" />
          <circle cx="220" cy="176" r="7" />
          <circle cx="52" cy="202" r="7" />
          <circle cx="100" cy="202" r="7" />
          <circle cx="148" cy="202" r="7" />
          <circle cx="196" cy="202" r="7" />
          <circle cx="244" cy="202" r="7" />
          <circle cx="28" cy="228" r="7" />
          <circle cx="76" cy="228" r="7" />
          <circle cx="124" cy="228" r="7" />
          <circle cx="172" cy="228" r="7" />
          <circle cx="220" cy="228" r="7" />
        </g>
      </g>
    </svg>
  );
}

export default function LanguageSwitcher({ currentLang = "es" }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (targetLang) => {
    // Save language preference in cookie
    document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;

    if (targetLang === currentLang) return;

    let targetPath = pathname;

    if (targetLang === "en") {
      // Switching from ES to EN
      if (pathname === "/") {
        targetPath = "/en";
      } else if (!pathname.startsWith("/en")) {
        targetPath = `/en${pathname}`;
      }
    } else {
      // Switching from EN to ES
      if (pathname === "/en") {
        targetPath = "/";
      } else if (pathname.startsWith("/en/")) {
        targetPath = pathname.replace(/^\/en/, "");
      }
    }

    router.push(targetPath);
  };

  return (
    <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-inner">
      <button
        onClick={() => switchLanguage("es")}
        title="Español"
        aria-label="Cambiar a Español"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
          currentLang === "es"
            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md scale-105"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center border border-white/20">
          <ArgentinaFlag className="w-full h-full object-cover" />
        </div>
        <span>ES</span>
      </button>

      <button
        onClick={() => switchLanguage("en")}
        title="English"
        aria-label="Switch to English"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
          currentLang === "en"
            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md scale-105"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center border border-white/20">
          <UsaFlag className="w-full h-full object-cover" />
        </div>
        <span>EN</span>
      </button>
    </div>
  );
}
