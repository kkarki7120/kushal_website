import { HISTORY_MILESTONES } from "@/lib/constants"
import Image from "next/image"

export function HistoryTimeline() {
  return (
    <section className="py-16 lg:py-24" id="company-journey">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C33A31]">Our Journey</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Since our founding in 1976, Kalika Group has grown from a small construction company to a leading
              conglomerate with diverse business interests.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            {/* <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-[#234190]"></div> */}

            <div className="space-y-12">
              <div className="relative w--full h-[75vh]">
                <Image src={"/kalika_construction_timeline.png"} className="object-cover" fill alt="kalika timeline" />
              </div>
              {/* {HISTORY_MILESTONES.reverse().map((milestone, index) => (
                <div key={index} className="relative">

                  <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white bg-[#C33A31]"></div>

                  <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>


                    <div
                      className={`md:w-1/2 p-4 flex items-center ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start md:justify-start"
                        }`}
                    >
                      <div className="text-3xl font-bold text-[#234190]">{milestone.year}</div>
                    </div>


                    <div className="md:w-1/2 p-4">
                      <div className="rounded-lg bg-white p-6 shadow-md">
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

