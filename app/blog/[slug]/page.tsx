import React, { use } from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/mdToHtml";
// import DarkmodeButton from "../../../components/DarkmodeButton";
// import useDarkMode from "../../components/hooks/useDarkMode";

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

function BlogTemplate({ params }) {
  // const [dark, setDark] = useDarkMode();
  const { post } = use(getData(params.slug)) as { post: BlogPost };

  return (
    <>
      {/* <DarkmodeButton
        title="Switch Night Mode"
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? "🌙" : "☀️"}
      </DarkmodeButton> */}
      <BlogWrapper
        title={post.title}
        publishDate={new Date(post.date).toDateString()}
      >
        <BlogBody content={post.content} />
      </BlogWrapper>
    </>
  );
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

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default BlogTemplate;
