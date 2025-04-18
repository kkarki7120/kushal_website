"use client"
import { Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export function AwardsSection() {
  const [awards, setAwards] = useState([])
  const [expandedAwards, setExpandedAwards] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const result = await fetch(`/api/awards`)
        const data = await result.json()
        setAwards(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAwards()
  }, [])

  const toggleExpand = (title: string) => {
    setExpandedAwards((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#B33529]">Recognition</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Awards & Appreciations</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We take great pride in receiving numerous awards and expressions of appreciation for our diverse work over
              the years. These honors serve as a constant source of inspiration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {awards.slice(0, 4).map((award) => {
              const isExpanded = expandedAwards[award?.title] || false
              const description = award?.description?.split(" ").splice(0, 15).join(" ") + "..."
              
              return (
                <div key={award?.title} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a030]/10">
                    <Trophy className="h-8 w-8 text-[#c8a030]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#00005E]">{award?.title}</h3>
                  {award?.years && <p className="mb-2 text-sm font-medium text-[#B33529]">{award?.years}</p>}
                  <p className="text-gray-600 text-sm cursor-pointer">
                    {isExpanded ? award?.description : description}
                    <span onClick={() => toggleExpand(award?.title)} className="cursor-pointer ml-1 text-blue-500">
                      {isExpanded ? " Show Less" : " Show More"}
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
