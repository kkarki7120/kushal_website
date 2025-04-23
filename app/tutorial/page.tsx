import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Clock, Search, BookOpen, ArrowRight, Filter, Code, Layers, Zap } from "lucide-react"

export default function TutorialPage() {
  // Frontend tutorials data
  const frontendTutorials = [
    {
      id: "fe-1",
      title: "Building Responsive Layouts with Flexbox and Grid",
      description: "Learn how to create modern, responsive layouts using CSS Flexbox and Grid systems.",
      difficulty: "Beginner",
      duration: "45 min",
      image: "/placeholder.svg?height=200&width=400&text=CSS+Layout",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      },
      tags: ["CSS", "Responsive Design", "Layout"],
      category: "Frontend",
      featured: true,
    },
    {
      id: "fe-2",
      title: "JavaScript Fundamentals for React Developers",
      description: "Master the essential JavaScript concepts you need to know before diving into React.",
      difficulty: "Beginner",
      duration: "60 min",
      image: "/placeholder.svg?height=200&width=400&text=JavaScript",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
      },
      tags: ["JavaScript", "ES6", "React"],
      category: "Frontend",
    },
    {
      id: "fe-3",
      title: "State Management with React Context and Hooks",
      description: "Learn how to manage application state effectively using React's built-in Context API and Hooks.",
      difficulty: "Intermediate",
      duration: "75 min",
      image: "/placeholder.svg?height=200&width=400&text=React+State",
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
      },
      tags: ["React", "State Management", "Hooks"],
      category: "Frontend",
    },
    {
      id: "fe-4",
      title: "Building Accessible Forms with React",
      description: "Create inclusive, accessible forms that work for all users regardless of ability or device.",
      difficulty: "Intermediate",
      duration: "60 min",
      image: "/placeholder.svg?height=200&width=400&text=Accessible+Forms",
      author: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=40&width=40&text=AT",
      },
      tags: ["Accessibility", "Forms", "React"],
      category: "Frontend",
    },
    {
      id: "fe-5",
      title: "Advanced Animation Techniques with Framer Motion",
      description: "Take your UI animations to the next level with Framer Motion's advanced features.",
      difficulty: "Advanced",
      duration: "90 min",
      image: "/placeholder.svg?height=200&width=400&text=Animations",
      author: {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=40&width=40&text=JL",
      },
      tags: ["Animation", "Framer Motion", "React"],
      category: "Frontend",
    },
    {
      id: "fe-6",
      title: "Building a Design System with Tailwind CSS",
      description: "Learn how to create a consistent, maintainable design system using Tailwind CSS.",
      difficulty: "Advanced",
      duration: "120 min",
      image: "/placeholder.svg?height=200&width=400&text=Design+System",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40&text=DW",
      },
      tags: ["Design Systems", "Tailwind CSS", "CSS"],
      category: "Frontend",
    },
  ]

  // Backend tutorials data
  const backendTutorials = [
    {
      id: "be-1",
      title: "RESTful API Design Principles",
      description: "Learn the fundamentals of designing clean, efficient, and developer-friendly REST APIs.",
      difficulty: "Beginner",
      duration: "60 min",
      image: "/placeholder.svg?height=200&width=400&text=REST+API",
      author: {
        name: "Robert Martinez",
        avatar: "/placeholder.svg?height=40&width=40&text=RM",
      },
      tags: ["API Design", "REST", "Backend"],
      category: "Backend",
      featured: true,
    },
    {
      id: "be-2",
      title: "Building Serverless Functions with Next.js",
      description: "Create powerful serverless API routes and functions using Next.js API routes.",
      difficulty: "Beginner",
      duration: "45 min",
      image: "/placeholder.svg?height=200&width=400&text=Serverless",
      author: {
        name: "Sophia Kim",
        avatar: "/placeholder.svg?height=40&width=40&text=SK",
      },
      tags: ["Serverless", "Next.js", "API"],
      category: "Backend",
    },
    {
      id: "be-3",
      title: "Database Schema Design Best Practices",
      description: "Master the art of designing efficient, scalable database schemas for your applications.",
      difficulty: "Intermediate",
      duration: "90 min",
      image: "/placeholder.svg?height=200&width=400&text=Database+Schema",
      author: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
      },
      tags: ["Database", "Schema Design", "SQL"],
      category: "Backend",
    },
    {
      id: "be-4",
      title: "Authentication and Authorization with JWT",
      description: "Implement secure user authentication and authorization using JSON Web Tokens.",
      difficulty: "Intermediate",
      duration: "75 min",
      image: "/placeholder.svg?height=200&width=400&text=JWT+Auth",
      author: {
        name: "Olivia Garcia",
        avatar: "/placeholder.svg?height=40&width=40&text=OG",
      },
      tags: ["Authentication", "JWT", "Security"],
      category: "Backend",
    },
    {
      id: "be-5",
      title: "Building Real-time Applications with WebSockets",
      description: "Create responsive real-time features using WebSockets and Socket.io.",
      difficulty: "Advanced",
      duration: "105 min",
      image: "/placeholder.svg?height=200&width=400&text=WebSockets",
      author: {
        name: "Daniel Park",
        avatar: "/placeholder.svg?height=40&width=40&text=DP",
      },
      tags: ["WebSockets", "Real-time", "Socket.io"],
      category: "Backend",
    },
    {
      id: "be-6",
      title: "Microservices Architecture with Node.js",
      description: "Design and implement a scalable microservices architecture using Node.js and Docker.",
      difficulty: "Advanced",
      duration: "150 min",
      image: "/placeholder.svg?height=200&width=400&text=Microservices",
      author: {
        name: "Natalie Brown",
        avatar: "/placeholder.svg?height=40&width=40&text=NB",
      },
      tags: ["Microservices", "Node.js", "Docker"],
      category: "Backend",
    },
  ]

  // Helper function to render difficulty badge
  const renderDifficultyBadge = (difficulty) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      Intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      Advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    }

    return (
      <Badge variant="outline" className={`${colors[difficulty]} border-none`}>
        {difficulty}
      </Badge>
    )
  }

  // Helper function to render tutorial cards
  const renderTutorialCard = (tutorial) => (
    <Card key={tutorial.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={tutorial.image || "/placeholder.svg"}
          alt={tutorial.title}
          width={400}
          height={200}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2">{renderDifficultyBadge(tutorial.difficulty)}</div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors">
          <Link href={`/tutorials/${tutorial.id}`}>{tutorial.title}</Link>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{tutorial.duration}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="line-clamp-3 mb-4">{tutorial.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={tutorial.author.avatar || "/placeholder.svg"}
            alt={tutorial.author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-muted-foreground">{tutorial.author.name}</span>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-primary" asChild>
          <Link href={`/tutorials/${tutorial.id}`}>
            Start <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )

  // Render featured tutorial
  const renderFeaturedTutorial = (tutorial) => (
    <Card className="overflow-hidden mb-12 transition-all duration-300 hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-2/5 relative">
          <Image
            src={tutorial.image || "/placeholder.svg"}
            alt={tutorial.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Featured
            </Badge>
          </div>
          <div className="absolute top-4 right-4">{renderDifficultyBadge(tutorial.difficulty)}</div>
        </div>
        <div className="p-6 md:w-3/5">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{tutorial.duration}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
            <Link href={`/tutorials/${tutorial.id}`}>{tutorial.title}</Link>
          </h3>
          <p className="text-muted-foreground mb-6">{tutorial.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tutorial.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={tutorial.author.avatar || "/placeholder.svg"}
                alt={tutorial.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm">{tutorial.author.name}</span>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href={`/tutorials/${tutorial.id}`}>
                Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Tutorials
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn and Master{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Web Development
              </span>
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Comprehensive, step-by-step tutorials to help you build modern web applications from scratch.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-4 py-6 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full md:w-1/4 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Filters
                </h3>
                <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">DIFFICULTY</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beginner" />
                      <Label htmlFor="beginner" className="text-sm font-normal cursor-pointer">
                        Beginner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="intermediate" />
                      <Label htmlFor="intermediate" className="text-sm font-normal cursor-pointer">
                        Intermediate
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="advanced" />
                      <Label htmlFor="advanced" className="text-sm font-normal cursor-pointer">
                        Advanced
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">DURATION</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="short" />
                      <Label htmlFor="short" className="text-sm font-normal cursor-pointer">
                        Under 60 min
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="medium" />
                      <Label htmlFor="medium" className="text-sm font-normal cursor-pointer">
                        60-90 min
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="long" />
                      <Label htmlFor="long" className="text-sm font-normal cursor-pointer">
                        Over 90 min
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">TOPICS</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="react" />
                      <Label htmlFor="react" className="text-sm font-normal cursor-pointer">
                        React
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="javascript" />
                      <Label htmlFor="javascript" className="text-sm font-normal cursor-pointer">
                        JavaScript
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="css" />
                      <Label htmlFor="css" className="text-sm font-normal cursor-pointer">
                        CSS
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="node" />
                      <Label htmlFor="node" className="text-sm font-normal cursor-pointer">
                        Node.js
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="database" />
                      <Label htmlFor="database" className="text-sm font-normal cursor-pointer">
                        Databases
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="api" />
                      <Label htmlFor="api" className="text-sm font-normal cursor-pointer">
                        API Design
                      </Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply Filters
                </Button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Learning Paths
              </h3>
              <div className="space-y-4">
                <Link
                  href="/learning-paths/frontend"
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white">
                      <Code className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Frontend Developer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Master modern frontend development with React, CSS, and more.
                  </p>
                </Link>

                <Link
                  href="/learning-paths/backend"
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center text-white">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Backend Developer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Build robust APIs, databases, and server-side applications.
                  </p>
                </Link>

                <Link
                  href="/learning-paths/fullstack"
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Full Stack Developer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Become a complete developer with end-to-end web application skills.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="frontend" className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="frontend" className="text-base py-3">
                  Frontend Development
                </TabsTrigger>
                <TabsTrigger value="backend" className="text-base py-3">
                  Backend Development
                </TabsTrigger>
              </TabsList>

              <TabsContent value="frontend">
                {/* Featured Frontend Tutorial */}
                {renderFeaturedTutorial(frontendTutorials.find((t) => t.featured))}

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Beginner Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frontendTutorials
                      .filter((t) => t.difficulty === "Beginner" && !t.featured)
                      .map(renderTutorialCard)}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Intermediate Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frontendTutorials.filter((t) => t.difficulty === "Intermediate").map(renderTutorialCard)}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Advanced Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frontendTutorials.filter((t) => t.difficulty === "Advanced").map(renderTutorialCard)}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="backend">
                {/* Featured Backend Tutorial */}
                {renderFeaturedTutorial(backendTutorials.find((t) => t.featured))}

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Beginner Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {backendTutorials.filter((t) => t.difficulty === "Beginner" && !t.featured).map(renderTutorialCard)}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Intermediate Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {backendTutorials.filter((t) => t.difficulty === "Intermediate").map(renderTutorialCard)}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Advanced Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {backendTutorials.filter((t) => t.difficulty === "Advanced").map(renderTutorialCard)}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Stay Updated
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Notified About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                New Tutorials
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Subscribe to our newsletter to receive updates when we publish new tutorials and learning resources.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
