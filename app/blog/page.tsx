import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
// import { db } from "@/lib/db"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { db } from "@/lib/db"
import { parseImages } from "@/utils"

export default async function BlogPage() {
  // Fetch featured blog posts (regular posts)
  const featuredPosts = await db.post.findMany({
    where: {
      featured: true,
      type: "blog",
      published: true,
    },
    take: 1,
    orderBy: {
      createdAt: "desc",
    },
  })

  console.log("featured posts", featuredPosts)

  // fetch blog post with link
  const blogPostWithLink = await db.post.findMany({
    where: {
      type: "link",
      published: true,
    },
  })
  console.log("blog post with link", blogPostWithLink)

  // Fetch regular blog posts
  const regularPosts = await db.post.findMany({
    where: {
      featured: false,
      type: "blog",
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })


  // fetch blog links 
  const blogLinks = await db.post.findMany({
    where: {
      type: "link",
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  console.log("blog links", blogLinks)



  // Fetch all categories for filtering
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
    take: 5, // Limit to 5 categories for the tabs
  })

  // Count posts by category for the category section
  const categoryCounts = await Promise.all(
    categories.map(async (category) => {
      const postCount = await db.postCategory.count({
        where: {
          categoryId: category.id,
        },
      })
      return {
        ...category,
        count: postCount,
      }
    }),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 -z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Thoughts
                </span>{" "}
                & Insights
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Exploring web development, design, and technology through articles, tutorials, and curated resources.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles and links..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <Tabs defaultValue="all" className="w-full max-w-5xl">
                <TabsList className="grid grid-cols-6 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    All
                  </TabsTrigger>
  
                  {categories.slice(0, 3).map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.name.toLowerCase()}
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* All Content Tab */}
                <TabsContent value="all">
                  {/* Featured Content */}
                  <div className="grid grid-cols-1 gap-12 py-4">
                    {featuredPosts.length > 0 && (
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative">
                            <Image
                              src={parseImages(featuredPosts[0].image)[0] || "/placeholder.svg?height=400&width=600&text=Featured+Post"}
                              alt="Featured Post"
                              width={600}
                              height={400}
                              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-blue-600 hover:bg-blue-700">Featured Article</Badge>
                            </div>
                          </div>
                          <div className="p-8 md:w-2/3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(featuredPosts[0].createdAt as Date).toLocaleDateString(undefined, {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {featuredPosts[0].title}
                            </h2>
                            <p className="text-muted-foreground mb-6">{featuredPosts[0].excerpt}</p>
                            <Button
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                              asChild
                            >
                              <Link href={`/blog/${featuredPosts[0].slug}`}>
                                Read Article <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {
                      blogLinks.length > 0 && (
                        blogLinks.map((link:any) => (
                          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="md:flex">
                            <div className="md:w-1/3 relative">
                              <Image
                                src={
                                  parseImages(link.image)[0] ||
                                    "/placeholder.svg?height=400&width=600&text=Featured+Link"
                                }
                                alt="Featured Link"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-purple-600 hover:bg-purple-700">Link</Badge>
                              </div>
                            </div>
                            <div className="p-8 md:w-2/3">
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge
                                  variant="outline"
                                  className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                                >
                                  {link.type}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {new Date(link.createdAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>
                              <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {link.title}
                              </h2>
                              <p className="text-muted-foreground mb-6">{link.excerpt.slice(0,100)}...</p>
                              <Button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                                asChild
                              >
                                <a href={link.blogLink} target="_blank" rel="noopener noreferrer">
                                  Visit Link <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                        )
                      )
                    )
                  }

                  {/* {
                    blogPostWithLink.length > 0 && (
                      blogPostWithLink.map((post:any) => (
                        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative">
                            <Image
                              src={
                                parseImages(post.image)[0] ||
                                  "/placeholder.svg?height=400&width=600&text=Featured+Link"
                              }
                              alt="Featured Link"
                              width={600}
                              height={400}
                              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-purple-600 hover:bg-purple-700">Link</Badge>
                            </div>
                          </div>
                          <div className="p-8 md:w-2/3">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                              >
                                {post.type}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(post.createdAt).toLocaleDateString(undefined, {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                            <Button
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                              asChild
                            >
                              <a href={post.blogLink} target="_blank" rel="noopener noreferrer">
                                Visit Link <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      ))
                    )
                  } */}
                    
                  </div>

                  {/* Regular Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Regular Blog Posts */}
                    {regularPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={
                              post.image
                                ? JSON.parse(post.image as string)[0] ||
                                  "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                : "/placeholder.svg?height=300&width=600&text=Blog+Post"
                            }
                            alt={post.title}
                            width={600}
                            height={300}
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">Article</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt?.slice(0,100)}...</p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}

                   
                         
                    {/* Regular Blog Links */}
                  </div>
                </TabsContent>

                {/* Articles Only Tab */}
                <TabsContent value="articles">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
                    {[...featuredPosts, ...regularPosts].map((post) => (
                      <div
                        key={post.id}
                        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={
                              post.image
                                ? JSON.parse(post.image as string)[0] ||
                                  "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                : "/placeholder.svg?height=300&width=600&text=Blog+Post"
                            }
                            alt={post.title}
                            width={600}
                            height={300}
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">
                              {post.featured ? "Featured" : "Article"}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Links Only Tab */}
                <TabsContent value="links">
                  <div className="grid grid-cols-1 gap-8 py-4">
                    {blogPostWithLink.map((post:any) => (
                     <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ">
                     <div className="md:flex">
                       <div className="md:w-1/3 relative">
                         <Image
                           src={
                             parseImages(post.image)[0] ||
                               "/placeholder.svg?height=400&width=600&text=Featured+Link"
                           }
                           alt="Featured Link"
                           width={600}
                           height={400}
                           className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                         />
                         <div className="absolute top-4 left-4">
                           <Badge className="bg-purple-600 hover:bg-purple-700">Link</Badge>
                         </div>
                       </div>
                       <div className="p-8 md:w-2/3">
                         <div className="flex items-center space-x-2 mb-2">
                           <Badge
                             variant="outline"
                             className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                           >
                             {post.type}
                           </Badge>
                           <div className="flex items-center text-sm text-muted-foreground">
                             <Calendar className="h-3 w-3 mr-1" />
                             {new Date(post.createdAt).toLocaleDateString(undefined, {
                               year: "numeric",
                               month: "long",
                               day: "numeric",
                             })}
                           </div>
                         </div>
                         <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                           {post.title}
                         </h2>
                         <p className="text-muted-foreground mb-6">{post.excerpt?.slice(0, 100)}...</p>
                         <Button
                           className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                           asChild
                         >
                           <a href={post.blogLink} target="_blank" rel="noopener noreferrer">
                             Visit Link <ExternalLink className="ml-2 h-4 w-4" />
                           </a>
                         </Button>
                       </div>
                     </div>
                   </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Category Tabs */}
                {categories.slice(0, 3).map((category) => (
                  <TabsContent key={category.id} value={category.name.toLowerCase()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* This would need a more complex query to filter by category */}
                      <div className="col-span-full text-center py-10">
                        <p className="text-muted-foreground">
                          Showing content in the {category.name} category. This would require additional database
                          queries.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="flex justify-center mt-16">
              <div className="inline-flex items-center space-x-2">
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="border-2 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all"
                >
                  1
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                  2
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                  3
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Categories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore by{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Topic
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Browse articles and links by category to find exactly what you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categoryCounts.map((category, index) => {
                // Define different gradient colors for categories
                const gradients = [
                  "from-blue-600 to-blue-400",
                  "from-purple-600 to-purple-400",
                  "from-green-600 to-green-400",
                  "from-orange-600 to-orange-400",
                  "from-pink-600 to-pink-400",
                ]

                return (
                  <Link key={category.id} href={`/blog/category/${category.name.toLowerCase()}`} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${
                          gradients[index % gradients.length]
                        } flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {/* Simple icon placeholder */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">{category.count} items</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Newsletter
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Updated
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Subscribe to my newsletter to receive the latest articles, tutorials, and curated links directly in your
                inbox.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div className="flex items-start">
                    <input type="checkbox" id="consent" className="mt-1 mr-2" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive emails about new articles, tutorials, and updates. You can unsubscribe at any
                      time.
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
