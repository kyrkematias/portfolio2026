export const postsEs = [
  {
    slug: "entrada",
    title: "Cómo optimizar la velocidad de carga de un sitio Next.js para mejorar el SEO",
    date: "2026-07-20",
    excerpt:
      "Descubre las mejores prácticas de optimización de rendimientos en Next.js, Core Web Vitals y cómo impactan en el posicionamiento orgánico en Google.",
    content: `
# Cómo optimizar la velocidad de carga de un sitio Next.js para mejorar el SEO

La velocidad de carga no solo es crucial para brindar una excelente experiencia de usuario, sino que también es un factor directo de posicionamiento para Google a través de las métricas **Core Web Vitals**.

## 1. Optimización de Imágenes con next/image
El componente \`next/image\` ofrece formateo automático en WebP/AVIF, dimensionamiento responsivo y carga diferida (lazy loading) por defecto.

## 2. Estrategias de Renderizado y Caching
Utilizar Server-Side Rendering (SSR) o Incremental Static Regeneration (ISR) permite servir HTML pre-renderizado a los motores de búsqueda de forma ultrarrápida.

## 3. Reducción de JavaScript en Cliente
Evitar el exceso de librerías en el bundle principal mediante dynamic imports (\`next/dynamic\`).
    `,
  },
];

export const postsEn = [
  {
    slug: "entry",
    title: "How to Optimize Next.js Load Speed to Boost Technical SEO",
    date: "2026-07-20",
    excerpt:
      "Discover performance optimization best practices in Next.js, Core Web Vitals, and how they directly impact organic Google rankings.",
    content: `
# How to Optimize Next.js Load Speed to Boost Technical SEO

Page speed is essential not only for delivering an outstanding user experience, but also as a direct Google ranking factor via **Core Web Vitals**.

## 1. Image Optimization with next/image
The \`next/image\` component provides automatic WebP/AVIF formatting, responsive sizing, and default lazy loading.

## 2. Rendering Strategies & Caching
Leveraging Server-Side Rendering (SSR) or Incremental Static Regeneration (ISR) allows delivering pre-rendered HTML to search engine crawlers at lightning speeds.

## 3. Minimizing Client Bundle Size
Avoid heavy client-side libraries in your main bundle by using dynamic imports (\`next/dynamic\`).
    `,
  },
];

export function getPosts(lang = "es") {
  return lang === "en" ? postsEn : postsEs;
}

export function getPostBySlug(slug, lang = "es") {
  const posts = getPosts(lang);
  return posts.find((p) => p.slug === slug) || null;
}
