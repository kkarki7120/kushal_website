import { NextRequest, NextResponse } from "next/server"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const REGION = process.env.AWS_REGION as string
const BUCKET = process.env.S3_BUCKET_NAME as string


const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const filename = searchParams.get("filename")
    const type = searchParams.get("type") || "application/octet-stream"

    if (!filename) {
      return NextResponse.json({ error: "filename is required" }, { status: 400 })
    }

    // Create a unique key; you can change this pathing as you like
    const ext = filename.split(".").pop()
    const key = `blog/featured/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      ContentType: type,
      // ACL: "public-read", // optional; you can also serve via CloudFront with OAC and omit this
    })

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 60 }) // 60s
    const base =  `https://${BUCKET}.s3.${REGION}.amazonaws.com`
    const fileUrl = `${base}/${key}`

    return NextResponse.json({ uploadUrl, fileUrl })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to create upload URL" }, { status: 500 })
  }
}
