"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Mail, Phone, MapPin, Clock, MessageSquare, Send, Instagram } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 -z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Contact
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get In{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Touch
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-muted-foreground">hello@kushal-karki.com.np</p>
                        <Link
                          href="mailto:kushal.karki@example.com"
                          className="text-blue-600 dark:text-blue-400 text-sm hover:underline inline-flex items-center mt-1"
                        >
                          Send an email <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p className="text-muted-foreground">+977 9843587829</p>
                        <Link
                          href="tel:+15551234567"
                          className="text-blue-600 dark:text-blue-400 text-sm hover:underline inline-flex items-center mt-1"
                        >
                          Call me <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-muted-foreground">Kathmandu, Nepal</p>
                        <Link
                          href="https://maps.app.goo.gl/nohnxmVbe7JAXpD16"
                          target="_blank"
                          className="text-blue-600 dark:text-blue-400 text-sm hover:underline inline-flex items-center mt-1"
                        >
                          View on map <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Working Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM PST</p>
                        <p className="text-muted-foreground">Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                  <p className="text-muted-foreground mb-6">
                    Follow me on social media to stay updated with my latest projects and articles.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Github className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">GitHub</span>
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Instagram className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">Instagram</span>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Linkedin className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Questions
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Find answers to common questions about my services and work process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What DevOps services do you offer?",
                  answer:
                    "I offer a range of DevOps services including cloud infrastructure design and implementation, CI/CD pipeline automation, Kubernetes deployment and management, infrastructure as code with Terraform, monitoring and observability solutions, and DevSecOps implementation.",
                },
                {
                  question: "Which cloud platforms do you work with?",
                  answer:
                    "I have extensive experience with AWS, Azure, and Google Cloud Platform. I can help with single-cloud or multi-cloud strategies depending on your business needs and requirements.",
                },
                {
                  question: "How can you help improve our deployment process?",
                  answer:
                    "I can analyze your current deployment workflow and implement CI/CD pipelines that automate testing, building, and deployment. This typically reduces deployment time from hours to minutes, minimizes human error, and enables more frequent, reliable releases.",
                },
                {
                  question: "Do you offer infrastructure monitoring services?",
                  answer:
                    "Yes, I implement comprehensive monitoring solutions using tools like Prometheus, Grafana, ELK stack, and cloud-native monitoring services. These provide real-time visibility into your infrastructure and applications, with automated alerting for potential issues.",
                },
                {
                  question: "How do you approach infrastructure security?",
                  answer:
                    "Security is integrated at every level of my DevOps approach. This includes implementing infrastructure as code with security best practices, container security scanning, network security policies, secrets management, and automated compliance checks in the CI/CD pipeline.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Still have questions? Feel free to reach out directly.</p>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const formElement = document.querySelector("form")
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                Location
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Find Me
                </span>
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Based in Kathmandu, but working with clients worldwide.
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              {/* <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.2010901448025!2d84.86708492618955!3d28.048884010343805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995323a592b3eed%3A0xc3fb0260aeb223a4!2sMulpani%2045100!5e0!3m2!1sen!2snp!4v1744969506968!5m2!1sen!2snp" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d520.5191158506345!2d85.39763914100143!3d27.71001191932582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1744973549885!5m2!1sen!2snp" width="600" height="450" allowFullScreen={true} loading="lazy" className="w-full" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

