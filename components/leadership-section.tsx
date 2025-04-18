import Image from "next/image"
import { getLeadership } from "@/app/admin/leadership/actions"

export async function LeadershipSection() {
  const leaders = await getLeadership()
  return (
    <section className="py-16 lg:py-24" id="leadership">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#B33529]">Our Team</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The strength of a company lies in its people. At Kalika, we firmly believe in cultivating a robust and
              cohesive team, allowing it to grow and thrive for common good.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {leaders.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-60 overflow-hidden rounded-[8px]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#00005E]">{member.name}</h3>
                  <p className="text-sm text-[#B33529]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

