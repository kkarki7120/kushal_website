import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Search, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { db } from "@/lib/db"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default async function BlogPage() {
  // Blog posts data
  const blogs = await db.post.findMany({})
  const blogPosts = [
    {
      slug: "kubernetes-best-practices",
      title: "Kubernetes Best Practices for Production Environments",
      excerpt:
        "Essential configurations and strategies for running reliable Kubernetes clusters in production, including resource management, security, and high availability.",
      date: "June 15, 2023",
      image: "/placeholder.svg?height=300&width=600&text=Kubernetes",
      category: "DevOps",
      categories: ["development", "technology"],
      readTime: "10 min read",
    },
    {
      slug: "terraform-vs-cloudformation",
      title: "Infrastructure as Code: Terraform vs. CloudFormation",
      excerpt:
        "A detailed comparison of the two most popular IaC tools and when to use each one for your cloud infrastructure needs.",
      date: "May 22, 2023",
      image: "/placeholder.svg?height=300&width=600&text=IaC",
      category: "Cloud",
      categories: ["development", "technology"],
      readTime: "8 min read",
    },
    {
      slug: "devsecops-pipeline",
      title: "Automating Security in Your CI/CD Pipeline",
      excerpt:
        "How to integrate security scanning and compliance checks into your deployment workflow for safer releases.",
      date: "April 10, 2023",
      image: "/placeholder.svg?height=300&width=600&text=DevSecOps",
      category: "Security",
      categories: ["development", "technology"],
      readTime: "12 min read",
    },
    {
      slug: "monitoring-stack",
      title: "Building a Modern Monitoring Stack",
      excerpt:
        "A guide to implementing Prometheus, Grafana, and Alertmanager for comprehensive infrastructure and application monitoring.",
      date: "March 15, 2023",
      image: "/placeholder.svg?height=300&width=600&text=Monitoring",
      category: "DevOps",
      categories: ["development", "technology"],
      readTime: "10 min read",
    },
    {
      slug: "container-security",
      title: "Container Security Best Practices",
      excerpt:
        "Essential techniques for securing your Docker containers and Kubernetes deployments in production environments.",
      date: "February 28, 2023",
      image: "/placeholder.svg?height=300&width=600&text=Container+Security",
      category: "Security",
      categories: ["development", "technology"],
      readTime: "15 min read",
    },
    {
      slug: "gitops-workflow",
      title: "Implementing GitOps with ArgoCD and Flux",
      excerpt:
        "How to set up a GitOps workflow for your Kubernetes clusters to achieve declarative and version-controlled infrastructure.",
      date: "February 10, 2023",
      image: "/placeholder.svg?height=300&width=600&text=GitOps",
      category: "DevOps",
      categories: ["development", "technology"],
      readTime: "9 min read",
    },
    {
      slug: "cloud-cost-optimization",
      title: "Cloud Cost Optimization Strategies",
      excerpt:
        "Practical techniques for reducing your AWS, Azure, or GCP bill without sacrificing performance or reliability.",
      date: "January 25, 2023",
      image: "/placeholder.svg?height=300&width=600&text=Cost+Optimization",
      category: "Cloud",
      categories: ["development", "career"],
      readTime: "7 min read",
    },
  ]

  const featuredBlogPost = await db.post.findMany({
    where: {
      featured: true,
    }
  })
  const fb = featuredBlogPost.slice(0, 1)
  console.log(fb)
  const blogPost = await db.post.findMany({
    where: {
      type: "blog"
    }
  })

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
                Exploring web development, design, and technology through articles, tutorials, and case studies.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <Tabs defaultValue="all" className="w-full max-w-3xl">
                <TabsList className="grid grid-cols-5 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="development"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="career"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    Career
                  </TabsTrigger>
                  <TabsTrigger
                    value="technology"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300"
                  >
                    Technology
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <div className="grid grid-cols-1 gap-12 mb-16">
                    {
                      fb.map((post: any, index: number) => {
                        console.log("featured post ", post)
                        const images = post.image ? JSON.parse(post.image) : [];
const imageUrl = images[0] || "/placeholder.svg?height=400&width=600&text=Featured+Post";

                        return (
                          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="md:flex">
                              <div className="md:w-1/3 relative">
                                <Image
                                  src={imageUrl || "/placeholder.svg?height=400&width=600&text=Featured+Post"}
                                  alt="Featured Post"
                                  width={600}
                                  height={400}
                                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                  <Badge className="bg-blue-600 hover:bg-blue-700">Featured</Badge>
                                </div>
                              </div>
                              <div className="p-8 md:w-2/3">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge
                                    variant="outline"
                                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                  >
                                    {post?.category || "Deveops"}
                                  </Badge>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {new Date(post.createdAt).toLocaleDateString(undefined, {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric"
                                    })}
                                  </div>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {post.title}
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                  {blogPosts[0].excerpt}
                                </p>
                                <Button
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                                  asChild
                                >
                                  <Link href={`/blog/${post.slug}`}>
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(1).map((post: any) => (
                      <div
                        key={post.slug}
                        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={post?.image[0] || "/placeholder.svg"}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                            <div className="text-sm text-muted-foreground">{post.readTime}</div>
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

                <TabsContent value="development">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPost
                      .map((post: any) => (
                        <div
                          key={post.slug}
                          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={600}
                              height={300}
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                              </div>
                              <div className="text-sm text-muted-foreground">{post.readTime}</div>
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

                <TabsContent value="design">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts
                      .filter((post) => post.categories.includes("design"))
                      .map((post) => (
                        <div
                          key={post.slug}
                          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={600}
                              height={300}
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                              </div>
                              <div className="text-sm text-muted-foreground">{post.readTime}</div>
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

                <TabsContent value="career">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts
                      .filter((post) => post.categories.includes("career"))
                      .map((post) => (
                        <div
                          key={post.slug}
                          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={600}
                              height={300}
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                              </div>
                              <div className="text-sm text-muted-foreground">{post.readTime}</div>
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

                <TabsContent value="technology">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts
                      .filter((post) => post.categories.includes("technology"))
                      .map((post) => (
                        <div
                          key={post.slug}
                          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={600}
                              height={300}
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                              </div>
                              <div className="text-sm text-muted-foreground">{post.readTime}</div>
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
                Browse articles by category to find exactly what you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "DevOps",
                  icon: (
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
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M12 2v2"></path>
                      <path d="M12 22v-2"></path>
                      <path d="m17 20.66-1-1.73"></path>
                      <path d="M11 10.27 7 3.34"></path>
                      <path d="m20.66 17-1.73-1"></path>
                      <path d="m3.34 7 1.73 1"></path>
                      <path d="M14 12h8"></path>
                      <path d="M2 12h2"></path>
                      <path d="m20.66 7-1.73 1"></path>
                      <path d="m3.34 17 1.73-1"></path>
                      <path d="m17 3.34-1 1.73"></path>
                      <path d="m7 20.66 1-1.73"></path>
                    </svg>
                  ),
                  count: 12,
                  color: "from-blue-600 to-blue-400",
                },
                {
                  name: "Cloud",
                  icon: (
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
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  ),
                  count: 8,
                  color: "from-purple-600 to-purple-400",
                },
                {
                  name: "Security",
                  icon: (
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  ),
                  count: 10,
                  color: "from-green-600 to-green-400",
                },
                {
                  name: "Automation",
                  icon: (
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
                  ),
                  count: 6,
                  color: "from-orange-600 to-orange-400",
                },
              ].map((category, index) => (
                <Link key={index} href={`/blog/category/${category.name.toLowerCase()}`} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.count} articles</p>
                  </div>
                </Link>
              ))}
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
                Subscribe to my newsletter to receive the latest articles, tutorials, and insights directly in your
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
      < Footer />
    </div>
  )
}

