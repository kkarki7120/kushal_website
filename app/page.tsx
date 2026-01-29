import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, ChevronDown, Mail, Linkedin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 -z-10"
            aria-hidden="true"
          ></div>
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"
            aria-hidden="true"
          ></div>
          <div className="container relative z-10 py-20 md:py-32 lg:py-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6 animate-fade-in">
                <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                  DevOps Engineer
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Kushal Karki
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mt-2">
                 DevOps Engineer in Nepal | AWS Certified Cloud Specialist
                </h2>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                 I architect and automate scalable, reliable cloud infrastructure. AWS-certified DevOps engineer specializing in CI/CD pipelines, Kubernetes orchestration, and Infrastructure as Code. Delivering secure, cost-effective solutions for fintech, SaaS, and enterprise clients across Nepal and globally.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    asChild
                  >
                    <Link href="/projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    asChild
                  >
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl animate-float">
                  <Image
                    src="/kushal.png"
                    alt="Kushal Karki - DevOps Engineer in Nepal specializing in AWS and Kubernetes"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce-slow"
                  aria-hidden="true"
                >
                  <ChevronDown className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get to Know{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                My Story
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              AWS-certified DevOps engineer with 3+ years of specialized experience in cloud automation, CI/CD pipelines, and infrastructure optimization. Based in Nepal, serving clients globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/kushal_pic.JPG"
                  alt="Kushal Karki - AWS Certified DevOps Engineer"
                  width={500}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                 <h3 className="text-2xl font-bold">My Background</h3>
                 <p className="text-muted-foreground">
                   With 3+ years of dedicated DevOps engineering experience and a foundation in full-stack development, I bring comprehensive understanding of the complete software development lifecycle. Currently at CloudLaya, I collaborate with clients to architect secure, scalable AWS solutions. My contract role at LophoPay Financial Ltd. provided invaluable experience managing mission-critical fintech infrastructure with 99.9% uptime requirements.
                 </p>
                 <p className="text-muted-foreground mt-2">
                   Beyond engineering, I actively contribute to Nepal's tech community by conducting workshops on Git, GitHub, and portfolio development at Nagarjuna College of IT, helping shape the next generation of developers.
                 </p>
               </div>

            <div className="space-y-4">
               <h3 className="text-2xl font-bold">My Expertise</h3>
               <div className="grid grid-cols-2 gap-4">
                 
                 <div className="flex items-start space-x-2">
                   <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                     01
                   </div>
                   <div>
                     <h4 className="font-semibold">Cloud Infrastructure</h4>
                     <p className="text-sm text-muted-foreground">AWS, Azure, GCP deployment & optimization</p>
                   </div>
                 </div>
             
                 <div className="flex items-start space-x-2">
                   <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                     02
                   </div>
                   <div>
                     <h4 className="font-semibold">CI/CD Automation</h4>
                     <p className="text-sm text-muted-foreground">Jenkins, GitHub Actions, GitLab CI/CD</p>
                   </div>
                 </div>
             
                 <div className="flex items-start space-x-2">
                   <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                     03
                   </div>
                   <div>
                     <h4 className="font-semibold">Infrastructure as Code</h4>
                     <p className="text-sm text-muted-foreground">Terraform, Ansible, CloudFormation</p>
                   </div>
                 </div>
             
                 <div className="flex items-start space-x-2">
                   <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                     04
                   </div>
                   <div>
                     <h4 className="font-semibold">Container Orchestration</h4>
                     <p className="text-sm text-muted-foreground">Docker, Kubernetes, Helm charts</p>
                   </div>
                  </div>

                    <div className="flex items-start space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                        05
                      </div>
                      <div>
                        <h4 className="font-semibold">Monitoring & Logging</h4>
                        <p className="text-sm text-muted-foreground">Prometheus, Grafana, ELK Stack</p>
                      </div>
                    </div>
                
                    <div className="flex items-start space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                        06
                      </div>
                      <div>
                        <h4 className="font-semibold">Web Server Management</h4>
                        <p className="text-sm text-muted-foreground">Nginx, Apache, load balancing</p>
                      </div>
                    </div>
                
                  </div>
              </div>

              <div className="pt-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/about">
                    More About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                My Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Projects
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                A selection of my recent work. Each project is unique and showcases different skills and technologies.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div
                className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md"
                role="tablist"
                aria-label="Filter projects by category"
              >
                <Button
                  variant="ghost"
                  className="rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  role="tab"
                  aria-selected="true"
                  aria-controls="all-projects"
                  id="tab-all"
                >
                  All
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  role="tab"
                  aria-selected="false"
                  aria-controls="web-apps-projects"
                  id="tab-web-apps"
                >
                  Web Apps
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  role="tab"
                  aria-selected="false"
                  aria-controls="mobile-projects"
                  id="tab-mobile"
                >
                  Mobile
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  role="tab"
                  aria-selected="false"
                  aria-controls="ui-ux-projects"
                  id="tab-ui-ux"
                >
                  UI/UX
                </Button>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="all-projects"
              role="tabpanel"
              aria-labelledby="tab-all"
            >
              {[
                {
                  id: 1,
                  title: "Multi-Cloud Infrastructure",
                  description:
                    "Designed and implemented a multi-cloud infrastructure using Terraform with automated failover capabilities.",
                  image: "/placeholder.svg?height=400&width=600&text=Multi-Cloud",
                  tags: ["Terraform", "AWS", "Azure", "High Availability"],
                  github: "https://github.com",
                  demo: "https://example.com",
                },
                {
                  id: 2,
                  title: "CI/CD Pipeline Automation",
                  description:
                    "Built a comprehensive CI/CD pipeline with Jenkins, Docker, and Kubernetes for microservices deployment.",
                  image: "/placeholder.svg?height=400&width=600&text=CI/CD+Pipeline",
                  tags: ["Jenkins", "Docker", "Kubernetes", "GitOps"],
                  github: "https://github.com",
                  demo: "https://example.com",
                },
                {
                  id: 3,
                  title: "Infrastructure Monitoring",
                  description:
                    "Implemented a robust monitoring solution using Prometheus, Grafana, and ELK stack for real-time alerts.",
                  image: "/placeholder.svg?height=400&width=600&text=Monitoring",
                  tags: ["Prometheus", "Grafana", "ELK", "Alerting"],
                  github: "https://github.com",
                  demo: "https://example.com",
                },
              ].map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-4 focus-within:ring-offset-background"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`Screenshot of ${project.title} project`}
                      width={600}
                      height={400}
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between items-center">
                        <Button
                          size="sm"
                          variant="default"
                          className="bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                          asChild
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                          asChild
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View source code for ${project.title} on GitHub`}
                          >
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                asChild
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Articles
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Insights on DevOps, cloud infrastructure, automation, and best practices for modern software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Kubernetes Best Practices for Production Environments",
                excerpt:
                  "Essential configurations and strategies for running reliable Kubernetes clusters in production.",
                date: "June 15, 2023",
                image: "/placeholder.svg?height=300&width=600&text=Kubernetes",
                category: "DevOps",
              },
              {
                id: 2,
                title: "Infrastructure as Code: Terraform vs. CloudFormation",
                excerpt: "A detailed comparison of the two most popular IaC tools and when to use each one.",
                date: "May 22, 2023",
                image: "/placeholder.svg?height=300&width=600&text=IaC",
                category: "Cloud",
              },
              {
                id: 3,
                title: "Automating Security in Your CI/CD Pipeline",
                excerpt: "How to integrate security scanning and compliance checks into your deployment workflow.",
                date: "April 10, 2023",
                image: "/placeholder.svg?height=300&width=600&text=DevSecOps",
                category: "Security",
              },
            ].map((post) => (
              <div
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30">Contact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work <span className="text-blue-200">Together</span>
              </h2>
              <p className="max-w-[700px] mx-auto text-blue-100">
                Looking for a DevOps engineer in Nepal? Let's discuss how I can help optimize your infrastructure, automate deployments, and scale your applications efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">Email</h4>
                        <p className="text-white">hello@kushal-karki.com.np</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Linkedin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">LinkedIn</h4>
                        <p className="text-white">linkedin.com/in/kushal-karki-47b408218</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Github className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-100">GitHub</h4>
                        <p className="text-white">github.com/kkarki7120</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-blue-100 mb-6">
                     I'm available for DevOps consulting, cloud infrastructure projects, and CI/CD implementations. Whether you're a startup or enterprise, let's explore how automation can accelerate your development workflow.
                  </p> 
                  <Button
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">Schedule a Call</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

