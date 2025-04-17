import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { Badge } from "@/components/ui/badge"

export default async function BlogPage() {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  // Count posts by type
  const blogCount = posts.filter((post) => post.type === "blog").length
  const noticeCount = posts.filter((post) => post.type === "notice").length

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts & Notices</h1>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="text-primary">
              Blogs: {blogCount}
            </Badge>
            <Badge variant="secondary">Notices: {noticeCount}</Badge>
          </div>
        </div>
        <Link href="/admin/blog/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Post
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={posts} />
    </div>
  )
}

