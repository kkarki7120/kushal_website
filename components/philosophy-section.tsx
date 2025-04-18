"use client"

import Image from "next/image"
import { Users, Globe, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhilosophySection() {
  const items = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "People",
      color: "bg-gradient-to-br from-sky-100 to-sky-50 text-sky-700 shadow-sky-200/50",
      iconBg: "bg-sky-700",
      description: "We value and support our customers, employees, partners, and society, believing that collective growth leads to a better future.",
      shortDesc: "Respecting diversity, fostering collaboration, promoting innovation, and pursuing excellence.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Planet",
      color: "bg-gradient-to-br from-green-100 to-green-50 text-green-700 shadow-green-200/50",
      iconBg: "bg-green-700",
      description: "We commit to sustainability, eco-friendly practices, and preserving the planet for future generations.",
      shortDesc: "A cleaner, greener, and better planet is a need of the hour.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Profit",
      color: "bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 shadow-amber-200/50",
      iconBg: "bg-amber-700",
      description: "Profit fuels innovation, growth, and impact, allowing us to solve problems for people and the planet.",
      shortDesc: "Growth through market expansion and innovation, sustainability, and strategic allocation among stakeholders.",
    },
  ]
  

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              Our Core Principles
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The <span className="text-sky-700">Philosophy</span> That Drives Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              At the heart of everything we do lies a balanced approach to business that values people, planet, and
              profit equally, ensuring sustainable growth and positive impact.
            </p>
          </div>

          {/* <div className="mb-16 grid gap-8 md:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${item.color} p-8 shadow-lg transition-all hover:translate-y-[-5px]`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rotate-12 bg-white/20 blur-3xl"></div>
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${item.iconBg} text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="text-base/relaxed opacity-90">{item.shortDesc}</p>
                <div className="mt-6 flex items-center">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div> */}

          <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10 md:p-12">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="col-span-2">
                <h3 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-gray-900">
                  How our philosophy <br />
                  <span className="relative">
                    <span className="relative z-10">shapes our business</span>
                    {/* <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-amber-200/60"></span> */}
                  </span>
                </h3>
                <div className="space-y-8">
                  {items.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center">
                        <div
                          className={`mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${item.iconBg} text-white shadow-md`}
                        >
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="pl-14 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pl-14">
                  <Button className="bg-sky-700 hover:bg-sky-800">
                    Learn about our initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block col-span-1">
                {/* <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-sky-100 opacity-60 blur-3xl"></div> */}
                {/* <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-amber-100 opacity-60 blur-3xl"></div> */}
                <div className="h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="./philosophy.png"
                    alt="Kalika Group Headquarters"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

