import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Container,
  GitBranch,
  LineChart,
  Lock,
  Rocket,
  Server,
  Settings,
  Shield,
  Zap,
  Building2,
  Stethoscope,
  ShoppingCart,
  Landmark,
  Layers,
  Search,
  Wrench,
  BarChart3,
  Target,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DevOps Engineering Services | CI/CD, Cloud Infrastructure, Automation",
  description:
    "Professional DevOps engineer services including CI/CD pipeline setup, cloud infrastructure (AWS, Azure, GCP), Kubernetes, Terraform, monitoring, and DevSecOps. Get faster deployments and scalable infrastructure.",
  keywords: [
    "DevOps engineer services",
    "DevOps consulting",
    "CI/CD services",
    "cloud DevOps",
    "DevOps automation",
    "Kubernetes services",
    "Terraform consulting",
    "AWS DevOps",
    "infrastructure as code",
    "DevSecOps",
  ],
}

const services = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup & Optimization",
    description:
      "Automate your software delivery with robust CI/CD pipelines. From code commit to production deployment, I design pipelines that reduce manual intervention, minimize errors, and accelerate your release cycles.",
    features: [
      "Automated testing and quality gates",
      "Blue-green and canary deployments",
      "Rollback strategies and versioning",
      "Integration with GitHub, GitLab, Bitbucket",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure (AWS, Azure, GCP)",
    description:
      "Design and implement cloud architectures that scale with your business. Whether you're migrating to the cloud or optimizing existing infrastructure, I help you leverage the full potential of cloud platforms.",
    features: [
      "Architecture design and implementation",
      "Multi-cloud and hybrid strategies",
      "High availability and disaster recovery",
      "Cost optimization and governance",
    ],
  },
  {
    icon: Code2,
    title: "Infrastructure as Code (Terraform, CloudFormation)",
    description:
      "Manage your infrastructure with code for consistency, version control, and repeatability. IaC eliminates configuration drift and enables rapid environment provisioning.",
    features: [
      "Terraform modules and workspaces",
      "AWS CloudFormation templates",
      "State management and collaboration",
      "Automated infrastructure testing",
    ],
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    description:
      "Package your applications in containers and orchestrate them at scale. Docker and Kubernetes provide the foundation for modern, microservices-based architectures.",
    features: [
      "Docker image optimization",
      "Kubernetes cluster setup and management",
      "Helm charts for application deployment",
      "Service mesh implementation (Istio, Linkerd)",
    ],
  },
  {
    icon: LineChart,
    title: "Monitoring & Logging",
    description:
      "Gain complete visibility into your systems with comprehensive monitoring and logging solutions. Detect issues before they impact users and make data-driven decisions.",
    features: [
      "Prometheus and Grafana dashboards",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Custom alerting and incident response",
      "Application performance monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Security & DevSecOps",
    description:
      "Integrate security at every stage of your development lifecycle. From vulnerability scanning to compliance automation, security becomes a continuous process, not an afterthought.",
    features: [
      "Container and image security scanning",
      "Secrets management (Vault, AWS Secrets Manager)",
      "Compliance automation and auditing",
      "Network security policies and IAM",
    ],
  },
  {
    icon: Settings,
    title: "Automation & Configuration Management",
    description:
      "Eliminate repetitive tasks and ensure consistent configurations across all environments. Automation reduces human error and frees your team to focus on innovation.",
    features: [
      "Ansible playbooks and roles",
      "Automated provisioning and scaling",
      "Configuration drift detection",
      "Self-healing infrastructure",
    ],
  },
  {
    icon: Zap,
    title: "Performance & Cost Optimization",
    description:
      "Optimize your infrastructure for both performance and cost efficiency. Identify bottlenecks, right-size resources, and implement strategies that maximize ROI.",
    features: [
      "Resource right-sizing and auto-scaling",
      "Reserved instances and spot optimization",
      "Performance profiling and tuning",
      "Cost allocation and reporting",
    ],
  },
  {
    icon: Rocket,
    title: "Cloud Migration & Modernization",
    description:
      "Transform legacy applications and migrate to modern cloud-native architectures. I guide you through every step of your modernization journey with minimal disruption.",
    features: [
      "Assessment and migration planning",
      "Lift-and-shift and re-platforming",
      "Application containerization",
      "Database migration strategies",
    ],
  },
]

const tools = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Terraform", category: "IaC" },
  { name: "CloudFormation", category: "IaC" },
  { name: "Ansible", category: "Config" },
  { name: "Docker", category: "Container" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Helm", category: "Orchestration" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Monitoring" },
  { name: "ELK Stack", category: "Logging" },
  { name: "Datadog", category: "Monitoring" },
  { name: "Vault", category: "Security" },
  { name: "Nginx", category: "Web Server" },
  { name: "Linux", category: "OS" },
]

const industries = [
  {
    icon: Layers,
    name: "SaaS Companies",
    description: "Scalable infrastructure for subscription-based software products",
  },
  {
    icon: Landmark,
    name: "FinTech",
    description: "Secure, compliant systems for financial services",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-compliant infrastructure and data protection",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "High-availability systems for peak traffic handling",
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "Cost-effective, scalable foundations for growth",
  },
  {
    icon: Building2,
    name: "Enterprises",
    description: "Complex multi-team infrastructure management",
  },
]

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Assessment",
    description:
      "Deep dive into your current infrastructure, workflows, and pain points. I identify bottlenecks, security gaps, and opportunities for improvement.",
  },
  {
    step: "02",
    icon: Target,
    title: "Strategy",
    description:
      "Develop a tailored DevOps roadmap aligned with your business goals. Prioritize initiatives based on impact and create a clear implementation plan.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Implementation",
    description:
      "Execute the plan with best practices in mind. From infrastructure setup to pipeline automation, every component is built for reliability and scale.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Monitoring & Optimization",
    description:
      "Continuous improvement through monitoring, feedback, and iteration. Track KPIs, optimize performance, and adapt to changing requirements.",
  },
]

const benefits = [
  "Faster time to market with automated deployments",
  "Reduced downtime and improved reliability",
  "Lower infrastructure costs through optimization",
  "Enhanced security with DevSecOps practices",
  "Scalable architecture that grows with your business",
  "Better collaboration between development and operations",
]

export default function DevOpsServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 -z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                DevOps Engineering Services
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ship Faster. Scale Smarter.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Stay Reliable.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your software delivery with expert DevOps engineering. From CI/CD automation to cloud
                infrastructure, I help teams deploy confidently, scale effortlessly, and maintain rock-solid
                reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is DevOps Section */}
        <section className="py-20 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                What is DevOps?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Bridge the Gap Between{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Development & Operations
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                DevOps is a set of practices, tools, and cultural philosophies that automates and integrates the
                processes between software development and IT teams. It enables organizations to deliver applications
                and services at high velocity, improving products faster than traditional software development
                processes.
              </p>
              <p className="text-muted-foreground">
                By breaking down silos between development and operations, DevOps creates a continuous feedback loop
                that accelerates innovation while maintaining stability and security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10x</div>
                    <p className="text-sm text-muted-foreground">Faster Deployments</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                    <p className="text-sm text-muted-foreground">Uptime SLA</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50%</div>
                    <p className="text-sm text-muted-foreground">Cost Reduction</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                DevOps Services{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Offered
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Comprehensive DevOps solutions tailored to your specific needs, from CI/CD automation to cloud
                infrastructure management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Tech Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Technologies
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Leveraging industry-leading tools and platforms to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                {tool.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30">Why Choose Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner With Me for{" "}
                <span className="text-blue-200">DevOps Services</span>
              </h2>
              <p className="max-w-[700px] mx-auto text-blue-100">
                Combining technical expertise with a business-focused approach to deliver real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Experience</h3>
                <p className="text-blue-100">
                  Hands-on experience with production systems, real-world challenges, and enterprise-scale
                  infrastructure across multiple industries.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
                <p className="text-blue-100">
                  Architecture designed for growth. Whether you're handling 100 or 100,000 users, your infrastructure
                  scales seamlessly.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security-First Approach</h3>
                <p className="text-blue-100">
                  Security integrated at every layer. From infrastructure hardening to CI/CD pipeline security, your
                  systems stay protected.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Business Impact Focus</h3>
                <p className="text-blue-100">
                  Every recommendation ties back to business value. Faster releases, reduced costs, and improved team
                  productivity.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Best Practices</h3>
                <p className="text-blue-100">
                  Stay current with GitOps, IaC, immutable infrastructure, and other modern practices that leading
                  companies use.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
                <p className="text-blue-100">
                  Track improvements with concrete metrics. Deployment frequency, lead time, MTTR, and change failure
                  rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 container">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
              Industries
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Served
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Delivering DevOps solutions across diverse industries with unique compliance and scalability requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0">
                  <industry.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Work Together
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                A structured approach to transform your infrastructure and development workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg h-full border border-gray-100 dark:border-gray-700">
                    <div className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 mt-2">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      Infrastructure?
                    </span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your challenges and explore how DevOps best practices can accelerate your business.
                    Book a free consultation to get started.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>Free initial assessment of your current setup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>Tailored recommendations for your specific needs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>No obligation, no hidden fees</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300"
                    asChild
                  >
                    <Link href="/projects">View My Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}