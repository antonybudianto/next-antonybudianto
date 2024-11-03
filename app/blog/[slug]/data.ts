import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/mdToHtml";
import type { BlogPost } from "./types";

const CACHE: Record<string, BlogPost> = {};

export async function getData(slug) {
  if (CACHE[slug]) {
    return CACHE[slug];
  }
  const post = getPostBySlug(slug, [
    "title",
    "desc",
    "date",
    "slug",
    "content",
    "ogImage",
  ]) as BlogPost;
  const content = await markdownToHtml(post.content || "");

  const newPost: BlogPost = {
    ...post,
    content,
  };
  CACHE[slug] = newPost;

  return newPost;
}
