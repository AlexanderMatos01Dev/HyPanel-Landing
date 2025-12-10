import type { CollectionEntry } from "astro:content";

export interface BlogPostProps {
  post: CollectionEntry<"blog">;
}

export interface Heading {
  depth: number;
  slug: string;
  text: string;
}
