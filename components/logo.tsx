interface LogoProps {
  size?: "sm" | "md" | "lg"
  withText?: boolean
  className?: string
}

export function Logo({ size = "md", withText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: {
      container: "h-6 w-6",
      droplet: "h-3 w-2",
      inner: "h-2.5 w-1.5",
      text: "text-base",
    },
    md: {
      container: "h-8 w-8",
      droplet: "h-4 w-2.5",
      inner: "h-3.5 w-2",
      text: "text-lg",
    },
    lg: {
      container: "h-12 w-12",
      droplet: "h-6 w-4",
      inner: "h-5 w-3",
      text: "text-2xl",
    },
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizes[size].container}`}>
        <div className="absolute inset-0 rounded-full bg-[#00005E]"></div>
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-b-full bg-white ${sizes[size].inner}`}
        ></div>
        <div
          className={`absolute left-1/2 top-1 -translate-x-1/2 transform rounded-full bg-[#B33529] ${sizes[size].droplet}`}
        ></div>
      </div>
      {withText && (
        <div className={sizes[size].text}>
          <span className="font-bold text-[#00005E]">KALIKA</span>
          <span className="font-bold text-[#B33529]">GROUP</span>
        </div>
      )}
    </div>
  )
}

