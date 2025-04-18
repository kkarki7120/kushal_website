import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
}

export function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full bg-[#C33A31]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <Button variant="link" className="group/btn p-0 text-primary">
            Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

