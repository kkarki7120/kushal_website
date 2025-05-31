// import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Edit, Trash2, ExternalLink, Star } from "lucide-react"
import { deleteBlogLink } from "./action"
import { Badge } from "@/components/ui/badge"
import { db } from "@/lib/db"

export async function BlogLinksList() {
  const blogLinks = await db.blogLink.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
              <th className="h-12 px-4 text-left align-middle font-medium">URL</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Categories</th>
              <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
              <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {blogLinks.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center text-muted-foreground">
                  No blog links found. Create your first one!
                </td>
              </tr>
            ) : (
              blogLinks.map((link) => (
                <tr
                  key={link.id}
                  className={`border-b transition-colors hover:bg-muted/50 ${link.featured ? "bg-amber-50" : ""}`}
                >
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      {link.featured && <Star className="h-4 w-4 text-amber-500" />}
                      {link.image && (
                        <div className="relative h-8 w-8 mr-2">
                          <Image
                            src={link.image.url || "/placeholder.svg"}
                            alt={link.image.alt || link.title}
                            fill
                            className="object-cover rounded-sm"
                          />
                        </div>
                      )}
                      {link.title}
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      {link.url.length > 30 ? `${link.url.substring(0, 30)}...` : link.url}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant="outline">{link.type}</Badge>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex flex-wrap gap-1">
                      {link.categories.length > 0 ? (
                        link.categories.map((cat) => (
                          <Badge key={cat.category.id} variant="secondary" className="text-xs">
                            {cat.category.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-muted-foreground text-xs">None</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        link.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {link.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="p-4 align-middle text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/blog-links/${link.id}/edit`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <form action={deleteBlogLink}>
                        <input type="hidden" name="id" value={link.id} />
                        <Button variant="destructive" size="sm" type="submit">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
