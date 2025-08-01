"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "/placeholder.svg?height=100&width=100",
    description: "Comprehensive certification covering AWS cloud architecture, security, and best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
    credentialId: "AWS-SAA-123456",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    badge: "/placeholder.svg?height=100&width=100",
    description: "Professional-level certification in Google Cloud Platform services and solutions.",
    skills: ["GCP Services", "Kubernetes", "Data Engineering", "ML/AI"],
    credentialId: "GCP-PCA-789012",
    verifyUrl: "https://cloud.google.com/certification",
  },
  {
    title: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2022",
    badge: "/placeholder.svg?height=100&width=100",
    description: "Advanced MongoDB development and database design certification.",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance"],
    credentialId: "MDB-DEV-345678",
    verifyUrl: "https://university.mongodb.com/verify",
  },
  {
    title: "React Developer",
    issuer: "Meta",
    date: "2022",
    badge: "/placeholder.svg?height=100&width=100",
    description: "Professional React development certification covering advanced concepts and patterns.",
    skills: ["React", "Hooks", "State Management", "Testing"],
    credentialId: "META-REACT-901234",
    verifyUrl: "https://developers.facebook.com/certification",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Certifications & Badges</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <Image
                          src={cert.badge || "/placeholder.svg"}
                          alt={`${cert.title} Badge`}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="font-semibold mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <Image
                        src={cert.badge || "/placeholder.svg"}
                        alt={`${cert.title} Badge`}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      {cert.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Issued by {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-sm">{cert.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Credential ID: {cert.credentialId}</p>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Verify Credential
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
