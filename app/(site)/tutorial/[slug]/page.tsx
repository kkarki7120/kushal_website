
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Clock, Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { prisma } from "@/lib/prisma"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface TutorialPageProps {
    params: {
        slug: string
    }
}

async function getTutorial(slug: string) {
    const tutorial = await prisma.tutorial.findUnique({
        where: {
            slug: slug,
            isPublished: true,
        },
        include: {
            author: true,
        },
    })
    console.log("tuturial ::::::::::::::::::::::", tutorial);

    return tutorial
}

export default async function TutorialDetailPage({ params }: TutorialPageProps) {
    const tutorial = await getTutorial(params.slug)
    console.log("tutorial :", tutorial)

    if (!tutorial) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="container relative h-full flex flex-col justify-end pb-12">
                    <Link
                        href="/tutorial"
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tutorials
                    </Link>
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge className="bg-primary hover:bg-primary/90">
                                {tutorial.category}
                            </Badge>
                            <Badge variant={
                                tutorial.difficulty === 'beginner' ? 'default' :
                                    tutorial.difficulty === 'intermediate' ? 'secondary' : 'destructive'
                            } className={
                                tutorial.difficulty === 'beginner' ? 'bg-green-500/20 text-green-100 hover:bg-green-500/30' :
                                    tutorial.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-100 hover:bg-yellow-500/30' :
                                        'bg-red-500/20 text-red-100 hover:bg-red-500/30'
                            }>
                                {tutorial.difficulty}
                            </Badge>
                            {tutorial.featured && (
                                <Badge variant="secondary" className="bg-purple-500/20 text-purple-100">
                                    Featured
                                </Badge>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            {tutorial.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                    <Image
                                        src={tutorial.author.avatar}
                                        alt={tutorial.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-medium text-white">{tutorial.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{tutorial.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{format(new Date(tutorial.createdAt), 'MMMM d, yyyy')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                    {/* Main Content */}
                    <main className="space-y-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {/* Description */}
                            <p className="lead text-xl text-muted-foreground">{tutorial.description}</p>

                            <Separator className="my-8" />

                            {/* Content */}
                            <div className="font-sans">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                >
                                    {tutorial.content || "No content available."}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="border-t pt-8 mt-8">
                            <h3 className="text-lg font-semibold mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {tutorial.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <Button className="w-full gap-2">
                                    <Share2 className="h-4 w-4" />
                                    Share Tutorial
                                </Button>
                                <Button variant="outline" className="w-full gap-2">
                                    <Bookmark className="h-4 w-4" />
                                    Save for Later
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Table of Contents could go here */}
                    </aside>
                </div>
            </div>
        </div>
    )
}
