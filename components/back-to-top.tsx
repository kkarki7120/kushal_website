"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Check initial scroll position
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background
          transition-transform hover:scale-110"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  )
}

