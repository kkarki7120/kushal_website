import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { db } from "@/lib/db"
import { parseImages } from "@/utils"
import Image from "next/image"

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await db.project.findUnique({
    where: {
      slug: params.slug,
    },
  })
  console.log("project", project)
  return (
    <div className="flex flex-col min-h-screen">
     < Navbar />
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">My Projects</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of my DevOps and infrastructure automation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="col-span-2">
                <Image src={parseImages(project?.image)[0] as string} alt={project?.title as string} width={1000} height={1000} />
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">{project?.title}</h2>
                    <p className="text-muted-foreground">{project?.description}</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Project Details</h3>
                        <p className="text-muted-foreground">{project?.details?.clientNeed}</p>
                        <p className="text-muted-foreground">{project?.details?.solution}</p>
                        <p className="text-muted-foreground">{project?.details?.estimatedCost}</p>
                        <p className="text-muted-foreground">{project?.details?.estimatedTime}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="mt-4">
                    <h3 className="text-lg font-bold">Project Links</h3>
                    <p className="text-muted-foreground">{project?.details?.projectLink}</p>
                    <p className="text-muted-foreground">{project?.details?.demoUrl}</p>
                </div>
            </div>
          </div>
        </section>
      </main>
      < Footer />
    </div>
  )
}