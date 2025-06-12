import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const projects = await db.project.findMany({
      orderBy: {
        title: "asc",
      },
      
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const { title, slug, excerpt, content, image, type, published, featured, blogLink, categories } = await request.json()

  const session = await getSession()

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })  
  }

  const existingPost = await db.post.findUnique({
    where: { slug },
  })

  if (existingPost) {   
    return NextResponse.json({ error: "Slug already exists. Choose a different one." }, { status: 400 })
  }

  const post = await db.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      image,
      type,
      published,
      featured,
      blogLink,
      categories: {
        create: categories.map((categoryId: string) => ({
          category: {
            connect: { id: categoryId },
          },
        })),
      },
      userId: user.id,
    },
  })

  return NextResponse.json(post)
}

