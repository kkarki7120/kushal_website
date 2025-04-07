"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed with email:", email)
    setEmail("")
    // Show success message or toast
  }

  return (
    <footer className="bg-gray-900 text-white py-12 relative" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
              aria-label="Kushal Karki's portfolio homepage"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-md">
                <span className="font-bold text-sm">KK</span>
              </div>
              <span className="inline-block font-bold">Kushal Karki</span>
            </Link>
            <p className="text-gray-400">Creating exceptional digital experiences through modern web development.</p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter profile">
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <div className="relative flex-1">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  aria-required="true"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full"
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Kushal Karki. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

