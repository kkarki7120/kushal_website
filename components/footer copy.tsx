import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

import { Logo } from "@/components/logo"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#00005E] py-12 text-gray-300">
      <div className="container px-4 sm:px-6 lg:px-8 m-auto">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
               <div className="relative">
                          <Image src={"whitelogo.png"} width={80} height={80} alt="logo" />
                        </div>
              {/* <Logo size="md" className="mb-4" /> */}
              <p className="mb-4 text-sm text-gray-400">
                Building infrastructure that connects communities and improves lives across the nation.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 transition-colors hover:text-[#B33529]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-[#B33529]">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>

                <Link href="#" className="text-gray-400 transition-colors hover:text-[#B33529]">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-[#B33529]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Business Verticals", href: "/verticals" },
                  { name: "Projects", href: "/projects" },
                  { name: "Awards", href: "/awards" },
                  { name: "CSR", href: "/csr" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="transition-colors hover:text-[#B33529]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Kathmandu</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>Corporate Office: KALIKA TOWER, Thirbam Sadak, Baluwatar-4, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>+977-1-4539152/53/54/55/59</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>info@kalikagroup.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Chitwan</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>Head Office: Bikram Marga, Bharatpur – 10, Chitwan, Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>+977 056 527155</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-[#B33529]" />
                  <span>chitwan@kalikagroup.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Kalika Group. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

