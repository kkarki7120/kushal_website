import { CORE_VALUES } from "@/lib/constants"
import { Rocket, Lightbulb, Star } from "lucide-react"

export function CoreValuesSection() {
  const icons = [
    <Rocket key="drive" className="h-10 w-10 text-[#B33529]" />,
    <Lightbulb key="continuity" className="h-10 w-10 text-[#B33529]" />,
    <Star key="effort" className="h-10 w-10 text-[#B33529]" />,
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#B33529]">Our Principles</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core Values</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide us in creating a dynamic culture of innovation and progress, enabling us to be
              leaders in the industries we enter.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {CORE_VALUES.map((value, index) => (
              <div
                key={value.title}
                className="rounded-xl border bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00005E]/10">
                  {icons[index]}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#00005E]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

