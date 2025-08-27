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
      // featured: true,
      published: true,
    },
    take: 1,
    orderBy: {
      createdAt: "desc",
    },
  })

  // fetch blog post with link
  const blogPostWithLink = await db.post.findMany({
    where: {
      published: true,
    },
  })
  console.log("blog post with link", blogPostWithLink)

  // Fetch regular blog posts
  const regularPosts = await db.post.findMany({
    where: {
      // featured: false,
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })


  // fetch blog links 
  const blogLinks = await db.post.findMany({
    // where: {
    //   published: true,
    // },
    orderBy: {
      createdAt: "desc",
    },
  })

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
          {/* Modern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-950 -z-10"></div>
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,#6366f1_0,transparent_40%),radial-gradient(circle_at_80%_80%,#a21caf_0,transparent_40%)] -z-10"></div>
          <div className="container">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Thoughts
                </span>{" "}
                & Insights
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
                Exploring web development, design, and technology through articles, tutorials, and curated resources.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search articles, categories, or topics..."
                  className="w-full pl-14 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-lg shadow-md"
                />
              </div>
            </div>

            {/* Featured Blog Card */}
            {featuredPosts && featuredPosts.length > 0 && (
              <div className="mb-16 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-tr from-blue-100/60 to-purple-100/60 dark:from-blue-900/60 dark:to-purple-900/60 rounded-3xl shadow-xl p-6 md:p-10 transition-all hover:scale-[1.01]">
                <div className="w-full md:w-2/5 aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={parseImages(featuredPosts[0].image)[0] || "/placeholder.svg?height=400&width=600&text=Featured+Post"}
                    alt={featuredPosts[0].title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      Featured
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPosts[0].createdAt as Date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 text-gray-900 dark:text-white">
                    {featuredPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 line-clamp-3">{featuredPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {featuredPosts[0].categories?.map((cat: any) => (
                      <span key={cat.id} className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full text-base font-semibold shadow-lg"
                      asChild
                    >
                      <Link href={featuredPosts[0].blogLink ? featuredPosts[0].blogLink : `/blog/${featuredPosts[0].slug}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      {featuredPosts[0].readingTime ? `${featuredPosts[0].readingTime} min read` : ""}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tabs for All, Articles, Links, Categories */}
            <div className="flex justify-center mb-12">
              <Tabs defaultValue="all" className="w-full max-w-6xl">
                <TabsList className="flex flex-wrap items-center gap-2 bg-white dark:bg-gray-900 px-2 rounded-2xl shadow-lg justify-center">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-5 py-2 rounded-full font-semibold transition"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="articles"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-5 py-2 rounded-full font-semibold transition"
                  >
                    Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="links"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-5 py-2 rounded-full font-semibold transition"
                  >
                    Links
                  </TabsTrigger>
                  {categories.slice(0, 4).map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.name.toLowerCase()}
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white px-5 py-2 rounded-full font-semibold transition"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* All Content Tab */}
                <TabsContent value="all">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {[...regularPosts].map((post) => (
                      <div
                        key={post.id}
                        className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                      >
                        <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden">
                          <Image
                            src={
                              post.image
                                ? parseImages(post.image)[0] ||
                                  "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                : "/placeholder.svg?height=300&width=600&text=Blog+Post"
                            }
                            alt={post.title}
                            width={600}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                              Article
                            </Badge>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            {post.readingTime && (
                              <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                • {post.readingTime} min read
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories?.map((cat: any) => (
                              <span key={cat.id} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                                {cat.name}
                              </span>
                            ))}
                          </div>
                          <div className="mt-auto">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Articles Only Tab */}
                <TabsContent value="articles">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {[...featuredPosts, ...regularPosts].map((post) => (
                      <div
                        key={post.id}
                        className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                      >
                        <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden">
                          <Image
                            src={
                              post.image
                                ? parseImages(post.image)[0] ||
                                  "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                : "/placeholder.svg?height=300&width=600&text=Blog+Post"
                            }
                            alt={post.title}
                            width={600}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                              {post.featured ? "Featured" : "Article"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            {post.readingTime && (
                              <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                • {post.readingTime} min read
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories?.map((cat: any) => (
                              <span key={cat.id} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                                {cat.name}
                              </span>
                            ))}
                          </div>
                          <div className="mt-auto">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Links Only Tab */}
                <TabsContent value="links">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {blogLinks
                      .filter((post: any) => post.type === "link" || post.blogLink)
                      .map((post: any) => (
                        <div
                          key={post.id}
                          className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                        >
                          <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden">
                            <Image
                              src={
                                post.image
                                  ? parseImages(post.image)[0] ||
                                    "/placeholder.svg?height=300&width=600&text=Blog+Link"
                                  : "/placeholder.svg?height=300&width=600&text=Blog+Link"
                              }
                              alt={post.title}
                              width={600}
                              height={300}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                                Link
                              </Badge>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              {post.readingTime && (
                                <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                  • {post.readingTime} min read
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.categories?.map((cat: any) => (
                                <span key={cat.id} className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-medium">
                                  {cat.name}
                                </span>
                              ))}
                            </div>
                            <div className="mt-auto">
                              <Button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-5 py-2 rounded-full text-base font-semibold shadow-lg"
                                asChild
                              >
                                <a href={post.blogLink || post.externalUrl} target="_blank" rel="noopener noreferrer">
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
                {categories.slice(0, 4).map((category) => (
                  <TabsContent key={category.id} value={category.name.toLowerCase()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                      {regularPosts
                        .filter((post: any) =>
                          post.categories?.some((cat: any) => cat.name.toLowerCase() === category.name.toLowerCase())
                        )
                        .map((post: any) => (
                          <div
                            key={post.id}
                            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                          >
                            <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden">
                              <Image
                                src={
                                  post.image
                                    ? parseImages(post.image)[0] ||
                                      "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                    : "/placeholder.svg?height=300&width=600&text=Blog+Post"
                                }
                                alt={post.title}
                                width={600}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                                  {category.name}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col p-6">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(post.createdAt as Date).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                                {post.readingTime && (
                                  <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                    • {post.readingTime} min read
                                  </span>
                                )}
                              </div>
                              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.categories?.map((cat: any) => (
                                  <span key={cat.id} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                                    {cat.name}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-auto">
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                >
                                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      {/* If no posts in category */}
                      {regularPosts.filter((post: any) =>
                        post.categories?.some((cat: any) => cat.name.toLowerCase() === category.name.toLowerCase())
                      ).length === 0 && (
                        <div className="col-span-full text-center py-10">
                          <p className="text-muted-foreground">
                            No posts found in the <span className="font-semibold">{category.name}</span> category.
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Pagination (optional, can be improved with logic) */}
            <div className="flex justify-center mt-16">
              <div className="inline-flex items-center space-x-2">
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all rounded-full px-5 py-2">
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="border-2 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all rounded-full px-5 py-2"
                >
                  1
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all rounded-full px-5 py-2">
                  2
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all rounded-full px-5 py-2">
                  3
                </Button>
                <Button variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all rounded-full px-5 py-2">
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
