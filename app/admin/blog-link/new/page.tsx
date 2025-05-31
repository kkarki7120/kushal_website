import { BlogLinkForm } from "../blog-link-form"
import { createBlogLink } from "../action"
import { db } from "@/lib/db"

interface Category {
  id: string
  name: string
}

interface BlogLink {
    id: string
    title: string
    slug?: string
    url: string
    excerpt?: string | null
    description?: string | null
    image?: string | null
    type?: string
    published: boolean
    featured?: boolean | null
    categories: {
      category: Category
    }[]  
  }

export default async function NewBlogLinkPage() {
  const categories = await db.category.findMany()
  // pass initial values in blogLink
  const initialValues: BlogLink = {
    id: "",
    title: "",
    url: "",
    slug: "",
    excerpt: "",
    description: "",
    image: "",
    type: "",
    published: false,
    featured: false,
    categories: []
  }
  return (
    <div className="container py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Add New Blog Link</h1>
      <BlogLinkForm blogLink={initialValues} action={createBlogLink} categories={categories || []}/>
    </div>
  )
}
