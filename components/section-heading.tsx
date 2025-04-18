interface SectionHeadingProps {
  subtitle: string
  title: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ subtitle, title, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-sm font-semibold uppercase tracking-wider ${light ? "text-primary-foreground" : "text-[#B33529]"}`}
      >
        {subtitle}
      </h2>
      <h3 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-gray-900"}`}>
        {title}
      </h3>
    </div>
  )
}

