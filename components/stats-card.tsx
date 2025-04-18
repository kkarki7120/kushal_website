interface StatsCardProps {
  number: string
  label: string
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border bg-white p-6 text-center shadow-sm">
      <div className="text-4xl font-bold text-[#C33A31]">{number}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  )
}

