import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Calendar, GraduationCap, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Cloudlaya LLC",
    duration: "August 2024 - present",
    responsibilities: [
      "Played a key role in SysOps tasks, including server provisioning, configuration management, and troubleshooting system-level issues to maintain optimal performance.",
      "Designed and implemented projects leveraging Docker, Nginx, Apache, and AWS services such as EC2, IAM, and S3 within a Linux environment, ensuring scalability and reliability.",
      "Gained hands-on experience with monitoring and visualization tools like Grafana, enabling proactive system performance tracking and issue resolution.",
      "Ensured consistency, quality, and adherence to best practices across all projects, successfully integrating cloud technologies into business operations."
    ]
  },
  {
    title: "Intern - DevOps Engineer",
    company: "Cloudlaya LLC",
    duration: "June 2024 - August 2024",
    responsibilities: [
      "Played a key role in SysOps tasks, including server provisioning, configuration management, and troubleshooting system-level issues to maintain optimal performance.",
      "Designed and implemented projects leveraging Docker, Nginx, Apache, and AWS services such as EC2, IAM, and S3 within a Linux environment, ensuring scalability and reliability.",
      "Gained hands-on experience with monitoring and visualization tools like Grafana, enabling proactive system performance tracking and issue resolution.",
      "Ensured consistency, quality, and adherence to best practices across all projects, successfully integrating cloud technologies into business operations."
    ]
  },
  {
    title: "Full-stack Web Developer",
    company: "KSW Techzone",
    duration: "October 2023 - February 2024",
    responsibilities: [
      "Retained as a Junior Developer following the internship, recognizing consistent performance and contributions to project success.",
      "Maintained code quality across front-end (HTML/CSS) and back-end (Django), ensuring CI/CD readiness and seamless integration.",
      "Developed and maintained web applications using Python and Django, delivering scalable and efficient solutions.",
      "Managed web hosting using shared hosting platforms, including domain configurations, email setup, and server maintenance.",
      "Performed system administration tasks such as managing Linux servers, troubleshooting hosting issues, and ensuring server reliability."
    ]
  },
  {
    title: "Intern - Web Development",
    company: "KSW Techzone Ltd.",
    duration: "August 2023 - October 2024",
    responsibilities: [
      "Maintained code quality across front-end (HTML/CSS) and back-end (Django).",
      "Acted as project lead, managed tasks, and ensured timely completion of goals.",
      "Collaborated with designers and developers to deliver cohesive design and functionality.",
      "Used Git and GitHub for collaborative development and deployment practices, improving team workflow efficiency."
    ]
  }
];


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-md">
                <span className="font-bold text-sm">KK</span>
              </div>
              <span className="inline-block font-bold">Kushal Karki</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-foreground relative group">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              </Link>
              <Link
                href="/projects"
                className="flex items-center text-sm font-medium text-muted-foreground relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/blog" className="flex items-center text-sm font-medium text-muted-foreground relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 -z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                About Me
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Journey
                </span>{" "}
                & Experience
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Learn more about my background, skills, and the path that led me to where I am today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Image
                    src="/kushal_pic.JPG"
                    alt="Kushal Karki"
                    width={500}
                    height={600}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Who Am I?</h2>
                  <p className="text-muted-foreground">
                  "I'm Kushal Karki, a passionate DevOps Engineer with 1 year of experience in automation and infrastructure management, alongside 1 year as a full-stack developer. My journey in tech began as a web developer, where I created functional and engaging digital experiences, while also managing system administration tasks like Linux servers, shared hosting, emails, and domains. This combination of roles ignited my passion for automation and infrastructure as code, leading me to pursue a career in DevOps.
                  </p>
                  <p className="text-muted-foreground">
                  In my DevOps journey, I’ve primarily worked on projects leveraging AWS, utilizing a wide range of its services to build and optimize cloud infrastructure. While I have minimal experience with GCP and Azure, the majority of my expertise lies in AWS, where I’ve implemented CI/CD pipelines, automated deployments, and enhanced system reliability. My hands-on experience spans services like EC2, S3, RDS, Lambda, and more, enabling me to deliver scalable and efficient solutions.
                  </p>
                  <p className="text-muted-foreground">
                  What drives me is the opportunity to bridge the gap between development and operations, crafting reliable, scalable systems. I thrive on solving complex infrastructure challenges and empowering teams to deliver software faster and more effectively."
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    AWS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Azure
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Terraform
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Kubernetes
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Jenkins
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    GitHub Actions
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Ansible
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Python
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              My Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Expertise
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A comprehensive overview of my technical skills and proficiencies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
                  <path d="M12 2v20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>AWS (EC2, S3, RDS, Lambda, ECS, EKS)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Azure (VMs, Storage, AKS, Functions)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Google Cloud Platform (GCE, GKE, Cloud Storage)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Multi-cloud architecture and management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Cloud cost optimization and governance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 10h-4V4h-4v6H6l6 6 6-6zm-8 8v2h8v-2h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Infrastructure as Code</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Terraform (modules, workspaces, state management)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>AWS CloudFormation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Ansible for configuration management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Pulumi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Infrastructure testing and validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10z"></path>
                  <path d="M12 12v6"></path>
                  <path d="M12 8v.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Containerization & Orchestration</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Docker (multi-stage builds, optimization)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Kubernetes (deployment, services, ingress, RBAC)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Helm charts for application deployment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Kubernetes operators and custom resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Service mesh (Istio, Linkerd)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">DevOps</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Git, GitHub</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>CI/CD (GitHub Actions)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>AWS, Vercel, Netlify</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Monitoring & Logging</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Project Management</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Agile/Scrum Methodology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Jira, Trello, Asana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Team Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Sprint Planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Client Communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Teamwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Time Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>Adaptability</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
  <div className="container">
    <div className="text-center mb-16">
      <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
        Experience
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Work{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Experience
        </span>
      </h2>
      <p className="max-w-[700px] mx-auto text-muted-foreground">
        My professional journey and the companies I've worked with.
      </p>
    </div>

    <div className="relative border-l-2 border-blue-600 mx-auto md:max-w-3xl pl-8 md:pl-0">
      {
        experiences.map((experience,index) => {
          return (
            <div className="mb-12 md:grid md:grid-cols-5 md:gap-6 md:px-5 relative " key={index}>
        <div className="md:col-span-2 md:text-right md:mx-auto flex flex-col items-center justify-center ">
          <div className="flex items-center md:justify-end">
            <Briefcase className="h-5 w-5 text-blue-600 mr-2 md:order-last md:ml-2 md:mr-0" />
            <h3 className="text-xl font-bold">{experience.title}</h3>
          </div>
          <p className="text-foreground flex md:justify-start">{experience.company}</p>
          <div className="flex items-center md:justify-start mt-1">
            <Calendar className="h-4 w-4 text-blue-600 mr-1 md:order-last md:ml-1 md:mr-0" />
            <p className="text-sm text-foreground flex">{experience.duration}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 dark:border-blue-900 md:left-0 md:-translate-x-1/2"></div>
          <ul className="space-y-2 list-disc list-inside text-justify ">
          {
            experience.responsibilities.map((list)=>{
              return <li key={list}>{list}</li>
            })
          }
          </ul>
        </div>
      </div>
          )
        })
      }
    </div>
  </div>
</section>


        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Education
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Background
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">My educational journey and qualifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University of Technology</p>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                    <p className="text-sm text-muted-foreground">2014 - 2018</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-muted-foreground">Graduated with honors (GPA: 3.8/4.0)</p>
                    <p className="text-muted-foreground">Specialized in Systems Administration and Cloud Computing</p>
                    <p className="text-muted-foreground">
                      Relevant coursework: Distributed Systems, Network Security, Cloud Architecture, Linux
                      Administration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Web Development Bootcamp</h3>
                  <p className="text-muted-foreground">Code Academy</p>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                    <p className="text-sm text-muted-foreground">2019</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-muted-foreground">Intensive 12-week program focused on modern web development</p>
                    <p className="text-muted-foreground">
                      Built 5 full-stack applications using React, Node.js, and MongoDB
                    </p>
                    <p className="text-muted-foreground">
                      Collaborated with a team of 4 to create a social media platform as a final project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  01
                </div>
                <h3 className="font-bold">AWS Certified DevOps Engineer - Professional</h3>
              </div>
              <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  02
                </div>
                <h3 className="font-bold">Certified Kubernetes Administrator (CKA)</h3>
              </div>
              <p className="text-sm text-muted-foreground">Cloud Native Computing Foundation • 2021</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  03
                </div>
                <h3 className="font-bold">HashiCorp Certified: Terraform Associate</h3>
              </div>
              <p className="text-sm text-muted-foreground">HashiCorp • 2020</p>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
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
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Kushal Karki. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

