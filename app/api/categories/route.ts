import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { prisma } from "@/lib/prisma"

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const type = searchParams.get("type") ?? undefined

//     const categories = await db.category.findMany({
//       where: type ? { type } : {},
//       orderBy: {
//         name: "asc",
//       },
//     })

//     return NextResponse.json(categories)
//   } catch (error) {
//     console.error("Error fetching categories:", error)
//     return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
//   }
// }

export async function GET() {
  const categories = await prisma.category.findMany()
  return NextResponse.json({ success: true, categories })
}


