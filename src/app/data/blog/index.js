import { postsEs } from "./es";
import { postsEn } from "./en";

export { postsEs, postsEn };

export function getPosts(lang = "es") {
  return lang === "en" ? postsEn : postsEs;
}

export function getPostBySlug(slug, lang = "es") {
  const posts = getPosts(lang);
  return posts.find((p) => p.slug === slug) || null;
}

export function getAlternatePostSlug(slug, currentLang = "es") {
  const currentPost = getPostBySlug(slug, currentLang);
  if (currentPost && currentPost.alternateSlug) {
    return currentPost.alternateSlug;
  }
  return null;
}

export function getRelatedPosts(currentSlug, lang = "es", limit = 2) {
  const posts = getPosts(lang);
  const currentPost = posts.find((p) => p.slug === currentSlug);

  if (!currentPost) return [];

  const candidates = posts.filter((p) => p.slug !== currentSlug);

  if (candidates.length === 0) return [];

  // Score candidates by shared category and tags
  const scored = candidates.map((p) => {
    let score = 0;

    // Category match
    if (
      currentPost.category &&
      p.category &&
      currentPost.category === p.category
    ) {
      score += 5;
    }

    // Shared tags
    if (
      currentPost.tags &&
      p.tags &&
      Array.isArray(p.tags) &&
      Array.isArray(currentPost.tags)
    ) {
      const sharedTags = p.tags.filter((t) => currentPost.tags.includes(t));
      score += sharedTags.length * 2;
    }

    return { post: p, score };
  });

  // Separate matches (score > 0) and unmatched (score === 0)
  const matched = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  const unmatched = scored.filter((item) => item.score === 0);

  const selected = matched.map((item) => item.post).slice(0, limit);

  // Fallback if matched is fewer than limit
  if (selected.length < limit && unmatched.length > 0) {
    const needed = limit - selected.length;
    const remainingCandidates = unmatched.map((item) => item.post);

    // Deterministic selection based on slug character codes to prevent hydration mismatch
    const seed = currentSlug
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    for (let i = 0; i < needed && remainingCandidates.length > 0; i++) {
      const index = Math.abs(seed + i) % remainingCandidates.length;
      const picked = remainingCandidates.splice(index, 1)[0];
      selected.push(picked);
    }
  }

  return selected;
}

export function getAllCategories(lang = "es") {
  const posts = getPosts(lang);
  const categories = posts.map((p) => p.category).filter(Boolean);
  return Array.from(new Set(categories));
}

export function getAllTags(lang = "es") {
  const posts = getPosts(lang);
  const tags = posts.flatMap((p) => p.tags || []).filter(Boolean);
  return Array.from(new Set(tags));
}

export function getPostsByCategory(category, lang = "es") {
  const posts = getPosts(lang);
  return posts.filter((p) => p.category === category);
}

export function getPostsByTag(tag, lang = "es") {
  const posts = getPosts(lang);
  return posts.filter((p) => p.tags && p.tags.includes(tag));
}
