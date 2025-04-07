import { Button, type ButtonProps } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AccessibleButtonProps extends ButtonProps {
  hasArrow?: boolean
  ariaLabel?: string
}

export function AccessibleButton({
  children,
  hasArrow = false,
  ariaLabel,
  className = "",
  ...props
}: AccessibleButtonProps) {
  return (
    <Button
      className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      {hasArrow && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
    </Button>
  )
}

