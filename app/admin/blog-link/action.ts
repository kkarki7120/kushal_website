"use server"

// import { uploadFile } from "@/lib/actions"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createBlogLink(formData: FormData) {
  const title = formData.get("title") as string
  const url = formData.get("url") as string
  const excerpt = formData.get("excerpt") as string
  const description = formData.get("description") as string
  const published = formData.get("published") === "on"
  const featured = formData.get("featured") === "on"
  const type = (formData.get("type") as string) || "blog"
  const categoryIds = formData.getAll("categories") as string[]

  // Get the uploaded image URL from the hidden field
  const uploadedImageUrl = formData.get("uploadedImageUrl") as string
  const imageData = uploadedImageUrl || null

  // Generate a slug from the title
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .substring(0, 60)

  try {
    // Create the blog link
    const blogLink = await prisma.blogLink.create({
      data: {
        title,
        slug,
        url,
        excerpt,
        description,
        published,
        featured,
        type,
        image: imageData, // Now stored as a JSON string array
      },
    })

    // Add categories if any were selected
    if (categoryIds.length > 0) {
      const categoryConnections = categoryIds.map((categoryId) => ({
        postId: blogLink.id,
        categoryId,
      }))

      await prisma.postCategory.createMany({
        data: categoryConnections,
      })
    }

    revalidatePath("/admin/blog-links")
    redirect("/admin/blog-links")
  } catch (error) {
    console.error("Failed to create blog link:", error)
    throw new Error("Failed to create blog link")
  }
}

export async function updateBlogLink(formData: FormData) {
  const id = formData.get("id") as string
  const title = formData.get("title") as string
  const url = formData.get("url") as string
  const excerpt = formData.get("excerpt") as string
  const description = formData.get("description") as string
  const published = formData.get("published") === "on"
  const featured = formData.get("featured") === "on"
  const type = (formData.get("type") as string) || "blog"
  const categoryIds = formData.getAll("categories") as string[]

  // Get the uploaded image URL from the hidden field
  const uploadedImageUrl = formData.get("uploadedImageUrl") as string
  const imageData = uploadedImageUrl || null

  try {
    // Get the current blog link to check if we need to update the image
    const currentBlogLink = await prisma.blogLink.findUnique({
      where: { id },
      select: { image: true },
    })

    // Update the blog link
    await prisma.blogLink.update({
      where: { id },
      data: {
        title,
        url,
        excerpt,
        description,
        published,
        featured,
        type,
        // Only update the image if a new one was uploaded
        image: imageData || currentBlogLink?.image,
      },
    })

    // Update categories - first delete existing ones
    await prisma.postCategory.deleteMany({
      where: { postId: id },
    })

    // Then add the new ones
    if (categoryIds.length > 0) {
      const categoryConnections = categoryIds.map((categoryId) => ({
        postId: id,
        categoryId,
      }))

      await prisma.postCategory.createMany({
        data: categoryConnections,
      })
    }

    revalidatePath("/admin/blog-links")
    redirect("/admin/blog-links")
  } catch (error) {
    console.error("Failed to update blog link:", error)
    throw new Error("Failed to update blog link")
  }
}

export async function deleteBlogLink(formData: FormData) {
  const id = formData.get("id") as string

  try {
    // The categories will be automatically deleted due to the onDelete: Cascade constraint
    await db.blogLink.delete({
      where: { id },
    })

    revalidatePath("/admin/blog-links")
  } catch (error) {
    console.error("Failed to delete blog link:", error)
    throw new Error("Failed to delete blog link")
  }
}

export async function getBlogLink(id: string) {
  try {
    return await db.blogLink.findUnique({
      where: { id },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    })
  } catch (error) {
    console.error("Failed to get blog link:", error)
    throw new Error("Failed to get blog link")
  }
}

export async function getCategories() {
  try {
    return await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    })
  } catch (error) {
    console.error("Failed to get categories:", error)
    throw new Error("Failed to get categories")
  }
}
