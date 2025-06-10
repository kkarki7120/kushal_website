import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Twitter, Linkedin, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { db } from "@/lib/db"
import { parseImages } from "@/utils"

// This is a more SEO-friendly approach using slug instead of id
export default async function BlogPostPage({ params }: { params: { slug: string } }) {

  const {slug} = await params;
  const blog = await db.post.findFirst({
    where: { slug },
    include:{
      categories: true,
      user: true,
    }
  })
  console.log("Blog Post:", blog)
  if (!blog) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground">The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-md">
                <span className="font-bold text-sm">KK</span>
              </div>
              <span className="inline-block font-bold">Kushal Karki</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm font-medium text-muted-foreground relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/projects"
                className="flex items-center text-sm font-medium text-muted-foreground relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/blog" className="flex items-center text-sm font-medium text-foreground relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <article>
          <div className="relative py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="container relative">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>

              <div className="max-w-3xl mx-auto">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                  {blog.categories.map((category) => category.name).join(", ")}
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">{blog.title}</h1>

                <div className="flex items-center space-x-4 mb-8">
                  <Image
                    src={  parseImages(blog.image)[0] || "/placeholder.svg"}
                    alt={blog.title}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    {/* <p className="font-medium">{post.author.name}</p> */}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {/* {blog.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })} */}
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      {/* {blog.readTime} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 lg:col-start-3">
                <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                  {/* <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" /> */}
                </div>

                <div
                  className="prose prose-lg dark:prose-invert max-w-none mb-12"
                  // dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="flex flex-wrap gap-2 mb-8">
                  {/* {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                    >
                      {tag}
                    </Badge>
                  ))} */}
                </div>

                <div className="flex justify-between items-center border-t border-b py-6 my-8">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                      <Link href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                      <Link href="https://linkedin.com/share" target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-12">
                  <div className="flex items-start space-x-4">
                    {/* <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    /> */}
                    <div>
                      <h3 className="text-xl font-bold mb-2">About the Author</h3>
                      {/* <p className="text-muted-foreground mb-4">{post.author.bio}</p> */}
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/about">View Profile</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/contact">Contact</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    {
                      slug: "getting-started-with-typescript",
                      title: "Getting Started with TypeScript in 2023",
                      excerpt: "A beginner's guide to TypeScript and why you should use it in your projects.",
                      date: "April 10, 2023",
                      image: "/placeholder.svg?height=300&width=600&text=TypeScript",
                      category: "Development",
                    },
                    {
                      slug: "optimizing-react-performance",
                      title: "Optimizing React Performance",
                      excerpt: "Advanced techniques to make your React applications faster and more efficient.",
                      date: "February 28, 2023",
                      image: "/placeholder.svg?height=300&width=600&text=React+Performance",
                      category: "Development",
                    },
                  ].map((relatedPost) => (
                    <div
                      key={relatedPost.slug}
                      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={600}
                          height={300}
                          className="object-cover transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 hover:bg-blue-700">{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {relatedPost.date}
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="comment" className="text-sm font-medium">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        placeholder="Your comment"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Post Comment
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-md">
                  <span className="font-bold text-sm">KK</span>
                </div>
                <span className="inline-block font-bold">Kushal Karki</span>
              </Link>
              <p className="text-gray-400">Creating exceptional digital experiences through modern web development.</p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Kushal Karki. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

