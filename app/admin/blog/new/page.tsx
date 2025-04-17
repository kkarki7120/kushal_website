import { db } from "@/lib/db"
import { PostForm } from "../post-form"

export default async function NewPostPage() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
      <PostForm />
    </div>
  )
}

