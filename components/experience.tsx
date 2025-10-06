"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import { SectionTitle } from "./section-title"
import experience from "@/data/experience.json"

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle number="04" title="Experience & Education" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const Icon = iconMap[item.type as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8 md:pr-0"}`}
                  >
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                          <p className="text-primary font-medium">{item.place}</p>
                          <p className="text-sm text-muted-foreground font-mono">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
