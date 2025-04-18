import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  category: string
}

export function NewsCard({ title, date, category }: NewsCardProps) {
  return (
    <div className="group rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-xs font-medium text-gray-500">{date}</div>
      <div className="mb-2 rounded-full bg-[#C33A31]/10 px-3 py-1 text-xs font-medium text-[#C33A31] inline-block">
        {category}
      </div>
      <h3 className="mb-3 text-lg font-bold">{title}</h3>
      <Link href="#" className="group/btn inline-flex items-center text-sm font-medium text-primary">
        Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </div>
  )
}

