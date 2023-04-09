import React from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts } from "@/lib/api";
import { getData } from "./data";
import NewHeader from "@/components/NewHeader";

async function BlogTemplate({ params }) {
  const post = await getData(params.slug);

  return (
    <>
      <NewHeader />
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
