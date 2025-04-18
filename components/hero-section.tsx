"use client";
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter()
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src="https://img.freepik.com/free-photo/excavator-action_1112-1598.jpg"
        alt="Kalika Group Headquarters"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
      <div className="container relative z-10 flex h-full flex-col items-end justify-center px-4 sm:px-6 lg:px-8 m-auto">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-white">GROWTH</span> <span className="text-[#B33529]">THROUGH</span>{" "}
            <span className="text-white">LEADERSHIP</span>
          </h1>
          <p className="text-xl text-white">
            From being the number one conglomerate in Nepal, Kalika Group continues to excel and lead the industry in
            every vertical we enter.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 bg-[#B33529] hover:bg-[#B33529]/90" onClick={() => router.push("/projects")}>
              Explore Our Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white backdrop-blur-sm" onClick={() => router.push("/about")}>
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

