"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Menu, X, Instagram } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-200 ${
        scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            aria-label="Kushal Karki's portfolio homepage"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-md">
              <span className="font-bold text-sm">KK</span>
            </div>
            <span className="inline-block font-bold">Kushal Karki</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center text-sm font-medium relative group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              asChild
            >
              <Link href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter profile">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              asChild
            >
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-16 z-50 bg-background transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <nav className="flex flex-col p-6 space-y-6" aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${
                  isActive ? "text-primary" : "text-foreground"
                } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-4 py-2`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}

          <div className="pt-6 border-t border-border">
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Instagram profile">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

