"use server"

import { put } from "@vercel/blob"
import { env } from "@/lib/env"

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      return { success: false, error: "No file provided" }
    }

    // Generate a unique filename
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
      token: env.BLOB_READ_WRITE_TOKEN,
    })

    return { success: true, url: blob.url }
  } catch (error) {
    console.error("Error uploading file:", error)
    return { success: false, error: "Failed to upload file" }
  }
}

// Instead of re-exporting, create wrapper functions
export async function createProjectWrapper(data: any) {
  try {
    const { createProject } = await import("@/app/admin/projects/actions")
    return await createProject(data)
  } catch (error) {
    console.error("Error in createProjectWrapper:", error)
    return { success: false, error: "Failed to create project" }
  }
}

export async function updateProjectWrapper(id: string, data: any) {
  try {
    const { updateProject } = await import("@/app/admin/projects/actions")
    return await updateProject(id, data)
  } catch (error) {
    console.error("Error in updateProjectWrapper:", error)
    return { success: false, error: "Failed to update project" }
  }
}

export async function deleteProjectWrapper(id: string) {
  try {
    const { deleteProject } = await import("@/app/admin/projects/actions")
    return await deleteProject(id)
  } catch (error) {
    console.error("Error in deleteProjectWrapper:", error)
    return { success: false, error: "Failed to delete project" }
  }
}

export async function createAwardWrapper(data: any) {
  try {
    const { createAward } = await import("@/app/admin/awards/actions")
    return await createAward(data)
  } catch (error) {
    console.error("Error in createAwardWrapper:", error)
    return { success: false, error: "Failed to create award" }
  }
}

export async function updateAwardWrapper(id: string, data: any) {
  try {
    const { updateAward } = await import("@/app/admin/awards/actions")
    return await updateAward(id, data)
  } catch (error) {
    console.error("Error in updateAwardWrapper:", error)
    return { success: false, error: "Failed to update award" }
  }
}

export async function deleteAwardWrapper(id: string) {
  try {
    const { deleteAward } = await import("@/app/admin/awards/actions")
    return await deleteAward(id)
  } catch (error) {
    console.error("Error in deleteAwardWrapper:", error)
    return { success: false, error: "Failed to delete award" }
  }
}

export async function createPostWrapper(data: any) {
  try {
    const { createPost } = await import("@/app/admin/blog/actions")
    return await createPost(data)
  } catch (error) {
    console.error("Error in createPostWrapper:", error)
    return { success: false, error: "Failed to create post" }
  }
}

export async function updatePostWrapper(id: string, data: any) {
  try {
    const { updatePost } = await import("@/app/admin/blog/actions")
    return await updatePost(id, data)
  } catch (error) {
    console.error("Error in updatePostWrapper:", error)
    return { success: false, error: "Failed to update post" }
  }
}

export async function deletePostWrapper(id: string) {
  try {
    const { deletePost } = await import("@/app/admin/blog/actions")
    return await deletePost(id)
  } catch (error) {
    console.error("Error in deletePostWrapper:", error)
    return { success: false, error: "Failed to delete post" }
  }
}

