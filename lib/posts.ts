import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log("⚠️ Markdown file not found:", filePath);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...data,
    contentHtml,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

export function deletePostMarkdown(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("🗑️ Deleted markdown file:", filePath);
  } else {
    console.log("⚠️ Markdown file to delete not found:", filePath);
  }
}
