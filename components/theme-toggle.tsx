"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showHint, setShowHint] = useState(true)

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)

    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem("hasSeenThemeHint")
    if (hasSeenHint) {
      setShowHint(false)
    } else {
      // Set a timeout to hide the hint after 5 seconds
      const timer = setTimeout(() => {
        setShowHint(false)
        localStorage.setItem("hasSeenThemeHint", "true")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full" disabled aria-hidden="true" />
  }

  return (
    <TooltipProvider>
      <Tooltip open={showHint} defaultOpen={showHint}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background relative"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <span className="sr-only">{theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}</span>
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-300" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" aria-hidden="true" />
            )}
            {showHint && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-blue-600 text-white border-blue-600">
          <p>Try our dark theme!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

