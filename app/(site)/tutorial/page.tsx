"use client"

import { useState, useEffect } from "react"
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
import { Clock, Search, BookOpen, ArrowRight, Filter, Code, Layers, Zap, Loader2 } from "lucide-react"
import { TutorialWithAuthor } from "@/@types/tutorial"

export default function TutorialPage() {
  const [tutorials, setTutorials] = useState<TutorialWithAuthor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  // Filters
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]) // short, medium, long
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]) // loose tags match

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch('/api/tutorials?isPublished=true&limit=100')
        const result = await response.json()
        console.log("tutorials :", result)
        if (result.success) {
          setTutorials(result.data.tutorials)
        }
      } catch (error) {
        console.error("Failed to fetch tutorials", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTutorials()
  }, [])

  // Filter Logic
  const filteredTutorials = tutorials.filter(tutorial => {
    // Search
    if (searchQuery && !tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Difficulty
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(tutorial.difficulty.toLowerCase())) {
      return false
    }

    // Duration (Logic could be improved with actual parsing, for now simplified)
    // Assuming simple string match or we'd need to parse minutes. 
    // This is a placeholder for refined logic.

    // Topics/Tags (Client side partial match)
    // if (selectedTopics.length > 0...)

    return true
  })

  const frontendTutorials = filteredTutorials.filter(t => t.category.toLowerCase() === 'frontend' || t.tags.some(tag => ['react', 'css', 'javascript', 'html'].includes(tag.toLowerCase())))
  const backendTutorials = filteredTutorials.filter(t => t.category.toLowerCase() === 'backend' || t.tags.some(tag => ['node', 'database', 'api', 'sql'].includes(tag.toLowerCase())))
  // Fallback: if category is explicit
  const explicitFrontend = filteredTutorials.filter(t => t.category === 'Frontend')
  const explicitBackend = filteredTutorials.filter(t => t.category === 'Backend')

  // Use explicit if available, otherwise heuristic
  const finalFrontend = explicitFrontend.length > 0 ? explicitFrontend : frontendTutorials
  const finalBackend = explicitBackend.length > 0 ? explicitBackend : backendTutorials

  // Helper function to render difficulty badge
  const renderDifficultyBadge = (difficulty: string) => {
    const colors: Record<string, string> = {
      beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
      Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      Intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      Advanced: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    }

    return (
      <Badge variant="outline" className={`${colors[difficulty] || colors['Beginner']} border-none`}>
        {difficulty}
      </Badge>
    )
  }

  // Helper function to render tutorial cards
  const renderTutorialCard = (tutorial: TutorialWithAuthor) => (
    <Card key={tutorial.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={tutorial.image || "/placeholder.svg"}
          alt={tutorial.title}
          width={400}
          height={200}
          className="object-cover transition-transform duration-500 hover:scale-105 h-full w-full"
        />
        <div className="absolute top-2 right-2">{renderDifficultyBadge(tutorial.difficulty)}</div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors">
          <Link href={`/tutorials/${tutorial.slug || tutorial.id}`}>{tutorial.title}</Link>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{tutorial.duration}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="line-clamp-3 mb-4">{tutorial.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center justify-between mt-auto">
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
          <Link href={`/tutorial/${tutorial.slug || tutorial.id}`}>
            Start <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )

  // Render featured tutorial
  const renderFeaturedTutorial = (tutorial: TutorialWithAuthor | undefined) => {
    if (!tutorial) return null;
    return (
      <Card className="overflow-hidden mb-12 transition-all duration-300 hover:shadow-lg">
        <div className="md:flex">
          <div className="md:w-2/5 relative h-[300px] md:h-auto">
            <Image
              src={tutorial.image || "/placeholder.svg"}
              alt={tutorial.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
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
              <Link href={`/tutorials/${tutorial.slug || tutorial.id}`}>{tutorial.title}</Link>
            </h3>
            <p className="text-muted-foreground mb-6 line-clamp-3">{tutorial.description}</p>
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
                <Link href={`/tutorial/${tutorial.slug || tutorial.id}`}>
                  Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    )
  }

  const devopsTutorials = filteredTutorials.filter(t =>
    t.category.toLowerCase() === 'devops' ||
    t.tags.some(tag => ['devops', 'docker', 'kubernetes', 'ci/cd', 'aws', 'cloud'].includes(tag.toLowerCase()))
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm text-muted-foreground"
                  onClick={() => {
                    setSelectedDifficulties([])
                    setSearchQuery("")
                  }}
                >
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">DIFFICULTY</h4>
                  <div className="space-y-2">
                    {['beginner', 'intermediate', 'advanced'].map((diff) => (
                      <div key={diff} className="flex items-center space-x-2">
                        <Checkbox
                          id={diff}
                          checked={selectedDifficulties.includes(diff)}
                          onCheckedChange={() => handleDifficultyChange(diff)}
                        />
                        <Label htmlFor={diff} className="text-sm font-normal cursor-pointer capitalize">
                          {diff}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Additional filters can be added here similar to difficulty */}

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
            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <Tabs defaultValue="frontend" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="all" className="text-base py-3">
                    All Tutorials
                  </TabsTrigger>
                  <TabsTrigger value="frontend" className="text-base py-3">
                    Frontend Development
                  </TabsTrigger>
                  <TabsTrigger value="backend" className="text-base py-3">
                    Backend Development
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  {renderFeaturedTutorial(filteredTutorials.find((t) => t.featured))}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">All Tutorials</h3>
                  </div>
                  {filteredTutorials.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No tutorials found.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTutorials.map(renderTutorialCard)}
                    </div>
                  )}
                </TabsContent>


                <TabsContent value="frontend">
                  {/* Featured Frontend Tutorial */}
                  {renderFeaturedTutorial(finalFrontend.find((t) => t.featured))}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">All Frontend Tutorials</h2>
                    {finalFrontend.length === 0 ? (
                      <p className="text-muted-foreground">No tutorials found.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {finalFrontend.map(renderTutorialCard)}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="devops">
                  {renderFeaturedTutorial(devopsTutorials.find((t) => t.featured))}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">All DevOps Tutorials</h3>
                  </div>
                  {devopsTutorials.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No tutorials found.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {devopsTutorials.map(renderTutorialCard)}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="backend">
                  {/* Featured Backend Tutorial */}
                  {renderFeaturedTutorial(finalBackend.find((t) => t.featured))}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">All Backend Tutorials</h2>
                    {finalBackend.length === 0 ? (
                      <p className="text-muted-foreground">No tutorials found.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {finalBackend.map(renderTutorialCard)}
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            )}
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
