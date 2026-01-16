"use server"

import { PutObjectCommand } from "@aws-sdk/client-s3"
import { s3Client } from "./s3"
import { env } from "./env"

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      return { success: false, error: "No file provided" }
    }

    // Increased limit to 5MB for better UX, though S3 can handle much larger
    if (file.size > 5 * 1024 * 1024) {
      return { success: false, error: "File size exceeds 5MB limit" }
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ContentType: file.type,
      ACL: "public-read",
    })

    await s3Client.send(command)

    // Construct URL
    const url = `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${filename}`

    return { success: true, url }
  } catch (error) {
    console.error("S3 upload error:", error)
    return { success: false, error: "Failed to upload file to S3" }
  }
}

