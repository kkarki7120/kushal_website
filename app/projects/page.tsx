import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { db } from "@/lib/db"
import { parseImages } from "@/utils"

export default async function ProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    // find category from categoryId
    include: {
      category: true,
    },
  })
  console.log("projects", projects)
  return (
    <div className="flex flex-col min-h-screen">
     < Navbar/>
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">My Projects</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of my DevOps and infrastructure automation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={typeof parseImages(project.image)[0] === "string" ? parseImages(project.image)[0] as string : "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.category?.name && (
                      <span
                        key={project.category.id}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {project.category.name}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex gap-2">
                    {
                      project.details?.demoUrl && (
                        <Button size="sm" asChild>
                      <Link href={project.details?.projectLink as string} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    )
                    }
                    
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.details?.projectLink as string} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/projects/${project.slug}`} target="_blank" rel="noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      < Footer/>
    </div>
  )
}

