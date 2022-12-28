import React from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts } from "@/lib/api";
import DarkmodeButtonWrapper from "@/components/DarkmodeButtonWrapper";
import { getData } from "./data";

async function BlogTemplate({ params }) {
  const post = await getData(params.slug);

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
