import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Twitter, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
     < Navbar/>
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">My Projects</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of my DevOps and infrastructure automation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                id: 1,
                title: "Multi-Cloud Infrastructure",
                description:
                  "Designed and implemented a multi-cloud infrastructure using Terraform with automated failover capabilities and disaster recovery.",
                image: "/placeholder.svg?height=400&width=600&text=Multi-Cloud",
                tags: ["Terraform", "AWS", "Azure", "High Availability", "IaC"],
                github: "https://github.com",
                demo: "https://example.com",
              },
              {
                id: 2,
                title: "CI/CD Pipeline Automation",
                description:
                  "Built a comprehensive CI/CD pipeline with Jenkins, Docker, and Kubernetes for microservices deployment with zero-downtime updates.",
                image: "/placeholder.svg?height=400&width=600&text=CI/CD+Pipeline",
                tags: ["Jenkins", "Docker", "Kubernetes", "GitOps", "Microservices"],
                github: "https://github.com",
                demo: "https://example.com",
              },
              {
                id: 3,
                title: "Infrastructure Monitoring",
                description:
                  "Implemented a robust monitoring solution using Prometheus, Grafana, and ELK stack for real-time alerts and performance tracking.",
                image: "/placeholder.svg?height=400&width=600&text=Monitoring",
                tags: ["Prometheus", "Grafana", "ELK", "Alerting", "Observability"],
                github: "https://github.com",
                demo: "https://example.com",
              },
              {
                id: 4,
                title: "Kubernetes Cluster Automation",
                description:
                  "Developed scripts and configurations for automated Kubernetes cluster provisioning and management across multiple environments.",
                image: "/placeholder.svg?height=400&width=600&text=Kubernetes",
                tags: ["Kubernetes", "Helm", "Automation", "GitOps", "ArgoCD"],
                github: "https://github.com",
                demo: "https://example.com",
              },
              {
                id: 5,
                title: "Disaster Recovery Solution",
                description:
                  "Created a comprehensive disaster recovery solution with automated backups, cross-region replication, and failover testing.",
                image: "/placeholder.svg?height=400&width=600&text=Disaster+Recovery",
                tags: ["AWS", "Terraform", "Backup", "High Availability", "Resilience"],
                github: "https://github.com",
                demo: "https://example.com",
              },
              {
                id: 6,
                title: "Security Automation",
                description:
                  "Implemented automated security scanning and compliance checks in the CI/CD pipeline with vulnerability remediation.",
                image: "/placeholder.svg?height=400&width=600&text=Security",
                tags: ["DevSecOps", "SAST", "DAST", "Compliance", "Automation"],
                github: "https://github.com",
                demo: "https://example.com",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      < Footer/>
    </div>
  )
}

