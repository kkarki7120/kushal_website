import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { createSlug, savePostToMarkdown } from "@/lib/blog"
import { prisma } from "@/lib/prisma"
import { deletePostMarkdown } from "@/lib/posts"

export async function GET() {
  try {
    const posts = await db.post.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
     console.log("Request received to publish post", request.body);
      const { title, description, content, externalUrl, isExternal, tags, focusKeyword, seoData, featuredImage, categories } = await request.json()
      const slug = createSlug(title)

      console.log("categories :", categories);
  
      // Save to database
      const dbPost = await prisma.post.create({
        data: {
          slug,
          title,
          description,
          content,
          externalUrl: isExternal ? externalUrl : null,
          isExternal,
          tags,
          focusKeyword,
          seoData: seoData as any,
          published: true,
          featuredImage,
        },
      })
  
      // Also save to markdown file for serving
      await savePostToMarkdown({
        id: dbPost.id,
        slug: dbPost.slug,
        title: dbPost.title,
        description: dbPost.description || "",
        date: dbPost.createdAt.toISOString(),
        updatedAt: dbPost.updatedAt.toISOString(),
        tags: dbPost.tags,
        content: dbPost.content || "",
        externalUrl: dbPost.externalUrl || "",
        isExternal: dbPost.isExternal,
        published: dbPost.published,
        focusKeyword: dbPost.focusKeyword || "",
        seoData: (dbPost.seoData as any) || {},
        featuredImage: dbPost.featuredImage || "",
        created_at: dbPost.createdAt,
        updated_at: dbPost.updatedAt,
        categories
      })
  
   
      return NextResponse.json({ success: true, slug }, { status: 200 })
    } catch (error) {
      console.error("Error publishing post:", error)
      return NextResponse.json({ success: false, error: error }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id , slug } = await request.json()

    // Delete from database
    await prisma.post.deleteMany({
      where: { id },
    })

    // Optionally, delete the markdown file as well
    await deletePostMarkdown(slug);

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting post:", error)
    return NextResponse.json({ success: false, error: error }, { status: 500 })
  }
}

