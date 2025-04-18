"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BUSINESS_VERTICALS } from "@/lib/constants"
// import { BUSINESS_VERTICALS } from "@/lib/constants"

export function BusinessVerticalsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#00005E] text-white business_verticals" >
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c8a030]">Our Businesses</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Verticals</h3>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              Our Verticals commitment to people, planet, and profit serves Kalika Group, a highly esteemed conglomerate
              in Nepal, thrives in diverse business verticals. Each sector is helmed by a capable team, united under the
              same umbrella, and guided by a shared culture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {BUSINESS_VERTICALS.map((vertical) => (
          <div
            key={vertical.name}
            className="rounded-xl bg-[#000070] p-6 shadow-md transition-all hover:shadow-lg flex flex-col h-full"
          >
            <div className="mb-4 h-24 flex items-center justify-center bg-white/10 rounded-lg p-2 relative">
              <Image
                src={vertical.logo || "/placeholder.svg?height=80&width=160"}
                alt={vertical.name}
                width={160}
                height={80}
                className="object-contain max-h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=80&width=160"
                }}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{vertical.name}</h3>
            <p className="mb-4 text-sm text-white/80 flex-grow">{vertical.description}</p>
            <div className="mt-auto">
              <Button variant="link" className="p-0 text-[#c8a030] hover:text-[#c8a030]/80">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </section>
  )
}

