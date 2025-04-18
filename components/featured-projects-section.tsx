import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"

export async function FeaturedProjectsSection() {
  // Fetch featured projects from the database
  const projects = await db.project.findMany({
    take: 6,
    where: {
      type: "featured",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
    },
  })

  console.log(projects)

  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#B33529]">Our Portfolio</h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h3>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const imageArray: string[] = project.image
                  ? JSON.parse(project.image)
                  : [];
                console.log(project.image)
                return (
                  <div
                    key={project.id}
                    className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={imageArray[0] || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute left-4 top-4 rounded-full bg-[#B33529]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.category?.name || "Uncategorized"}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
                      <div className="mt-4">
                        <Link href={`/projects/${project.slug}`}>
                          <Button variant="link" className="group/btn p-0 text-[#00005E]">
                            Read More{" "}
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

