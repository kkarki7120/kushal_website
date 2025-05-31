"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { Prisma } from "@prisma/client"

export async function createPost(data: any) {
  try {
    const existingPost = await db.post.findUnique({
      where: { slug: data.slug },
    })

    if (existingPost) {
      return { success: false, error: "Slug already exists. Choose a different one." }
    }

    console.log(data)

    await db.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image,
        type: data.type || "blog",
        published: data.published || false,
        categories: {
          create: data.categories.map((categoryId: string) => ({
            category: {
              connect: { id: categoryId },
            },
          })),
        },
        featured: data.featured || false,
        blogLink: data.link || null
      },
    })
    

    revalidatePath("/admin/blog")
    revalidatePath("/blog")
    revalidatePath("/")

    return { success: true , data }
  } catch (error) {
    return { success: false, error: error || "Failed to create post" }
  }
}


export async function updatePost(id: string, data: any) {
  try {
    const existingPost = await db.post.findUnique({
      where: { id },
    })

    if (!existingPost) {
      return { success: false, error: "Post not found." }
    }

    await db.post.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image,
        type: data.type || "blog",
        published: data.published || false,
        categories: {
          create: data.categories.map((categoryId: string) => ({
            category: {
              connect: { id: categoryId },
            },
          })),
        },
        featured: data.featured || false
      },
    })

    revalidatePath("/admin/blog")
    revalidatePath("/blog")
    revalidatePath(`/blog/${data.slug}`)
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Failed to update post:", error)
    return { success: false, error: "Failed to update post" }
  }
}

export async function deletePost(id: string) {
  try {
    await db.post.delete({
      where: { id },
    })

    revalidatePath("/admin/blog")
    revalidatePath("/blog")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Failed to delete post:", error)

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return { success: false, error: "Post not found." }
      }
    }

    return { success: false, error: "Failed to delete post" }
  }
}
