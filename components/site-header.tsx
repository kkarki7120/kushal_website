import Link from "next/link"
import { Building, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl mr-6">
          Construction CMS
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            <div className="flex items-center">
              <Building className="h-4 w-4 mr-1" />
              Projects
            </div>
          </Link>
          <Link href="/awards" className="text-sm font-medium transition-colors hover:text-primary">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Awards
            </div>
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              Blog
            </div>
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

