"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { SectionTitle } from "./section-title"
import { Button } from "@/components/ui/button"
import personal from "@/data/personal.json"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle number="05" title="Get In Touch" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want
            to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href={`mailto:${personal.email}`}>
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{personal.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
