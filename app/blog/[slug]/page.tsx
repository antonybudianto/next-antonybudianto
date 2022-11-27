import React from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/mdToHtml";
import DarkmodeButtonWrapper from "@/components/DarkmodeButtonWrapper";

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

export async function getData(slug) {
  const post = getPostBySlug(slug, [
    "title",
    "desc",
    "date",
    "slug",
    "content",
    "ogImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    post: {
      ...post,
      content,
    },
  };
}

async function BlogTemplate({ params }) {
  const { post } = (await getData(params.slug)) as { post: BlogPost };

  return (
    <>
      <DarkmodeButtonWrapper />
      <BlogWrapper
        title={post.title}
        publishDate={new Date(post.date).toDateString()}
      >
        <BlogBody content={post.content} />
      </BlogWrapper>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default BlogTemplate;
