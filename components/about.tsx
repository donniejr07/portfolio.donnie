"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import personal from "@/data/personal.json"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm {personal.name}, a passionate developer based in {personal.location}. I recently graduated
                with a degree in Informatics, and I'm excited to start my career in software development.
              </p>
              <p>
                My journey into programming started during high school when I built my first website. Since then, I've
                been fascinated by the endless possibilities of technology and how it can solve real-world problems.
              </p>
              <p>
                I specialize in backend development and mobile applications, but I'm always eager to learn new
                technologies and expand my skill set. When I'm not coding, you can find me contributing to open-source
                projects or exploring the latest tech trends.
              </p>
              <p className="text-foreground font-medium">{personal.tagline}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative rounded-lg overflow-hidden border-2 border-primary/50">
                <Image
                  src={personal.photo || "/placeholder.svg"}
                  alt={personal.name}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
