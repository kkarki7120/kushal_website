"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { UploadButton } from "@/components/upload-button"

interface Category {
  id: string
  name: string
}

interface BlogLinkFormProps {
  blogLink?: {
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
  } | null
  categories: Category[]
  action: (formData: FormData) => Promise<void>
}

export function BlogLinkForm({ blogLink, categories, action }: BlogLinkFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    blogLink?.categories.map((c) => c.category.id) || [],
  )
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  console.log("blogLink", blogLink)

  // Set initial image preview if blogLink has an image
  useEffect(() => {
    if (blogLink?.image) {
      try {
        const imageData = JSON.parse(blogLink.image)
        if (Array.isArray(imageData) && imageData.length > 0 && imageData[0]) {
          setImagePreview(imageData[0])
          setUploadedImageUrl(imageData[0])
        }
      } catch (e) {
        console.error("Error parsing image data:", e)
      }
    }
  }, [blogLink])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)

      // Remove any existing categories from the form data
      formData.delete("categories")

      // Add each selected category to the form data
      selectedCategories.forEach((categoryId) => {
        formData.append("categories", categoryId)
      })

      for (let key in blogLink) {
        if (key !== "categories" && blogLink[key as keyof typeof blogLink] != null) {
          formData.append(key, String(blogLink[key as keyof typeof blogLink]));
        }
      }
      

      // Add the uploaded image URL as a hidden field
      if (uploadedImageUrl) {
        // Create a hidden field for the image URL
        const imageData = JSON.stringify([uploadedImageUrl])
        formData.append("uploadedImageUrl", imageData)
      }

      await action(formData)
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
    }
  }

  function handleCategoryToggle(categoryId: string) {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  function handleUploadComplete(url: string) {
    setImagePreview(url)
    setUploadedImageUrl(url)
  }

  function handleRemoveImage() {
    setImagePreview(null)
    setUploadedImageUrl(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{blogLink ? "Edit Blog Link" : "Create Blog Link"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {blogLink && <input type="hidden" name="id" value={blogLink.id} />}
          {uploadedImageUrl && <input type="hidden" name="uploadedImageUrl" value={uploadedImageUrl} />}

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title" 
              name="title" 
              defaultValue={blogLink?.title || ""} 
              value={blogLink?.title || " " }  
              required 
              />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              name="url"
              type="url"
              defaultValue={blogLink?.url || ""}
              value={blogLink?.url || ""}
              required
              placeholder="https://example.com/article"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              defaultValue={blogLink?.excerpt || ""}
              value={blogLink?.excerpt || ""}
              placeholder="Brief excerpt of the link"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={blogLink?.description || ""}
              value={blogLink?.description || ""}
              placeholder="Additional description"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <div className="flex items-center gap-4">
              <UploadButton variant="outline" onUploadComplete={handleUploadComplete} />

              {imagePreview && (
                <div className="relative h-16 w-16">
                  <Image
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    fill
                    className="object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select name="type" defaultValue={blogLink?.type || "blog"}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="news">News</SelectItem>
                <SelectItem value="tutorial">Tutorial</SelectItem>
                <SelectItem value="resource">Resource</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Categories</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    // value={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryToggle(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="published" name="published" defaultChecked={blogLink?.published ?? true} />
              <Label htmlFor="published">Published</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="featured" name="featured" defaultChecked={blogLink?.featured ?? false} />
              <Label htmlFor="featured">Featured</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/blog-links")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : blogLink ? "Update" : "Create"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
