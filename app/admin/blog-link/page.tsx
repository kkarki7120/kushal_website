import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { BlogLinksList } from "./blog-links-list"

export default function BlogLinksPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog Links</h1>
        <Button asChild>
          <Link href="/admin/blog-link/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Link
          </Link>
        </Button>
      </div>
      <BlogLinksList />
    </div>
  )
}
