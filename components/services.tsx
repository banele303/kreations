"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Business Cards",
    description: "Professional business card designs that make a lasting impression",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM%20(1)-H288LvnKK8HHULPlFCIJqXlWosBvM8.jpeg",
  },
  {
    title: "Flyer/Poster",
    description: "Eye-catching flyers and posters that demand attention",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM%20(2)-zYVMMQ1NEr9r1lMvvecY72OciDldGj.jpeg",
  },
  {
    title: "Magazine/Book/Album Covers",
    description: "Stunning cover designs that tell your story",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM%20(1)-fZzZS5qgTVwiIJJZvGd7zQlJh7CC36.jpeg",
  },
  {
    title: "Photo Manipulation",
    description: "Creative digital art and photo manipulation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM-KrcnuAaXy0XqnI1R5cjHDtxK9Siddi.jpeg",
  },
  {
    title: "Logo Designs",
    description: "Unique and memorable brand identities",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM-0wCMojJcYdH8NTHnFYovsFxFIIa03R.jpeg",
  },
  {
    title: "Editing Pictures",
    description: "Professional photo editing and enhancement",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM%20(2)-913QpBUYS5Q42KuOJtf9n9OKN2PgVv.jpeg",
  },
]

export const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Leaf Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'url("/leaves-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden bg-black/40 backdrop-blur-sm border-primary/20">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p
                        className={cn(
                          "text-white/80 transform-gpu transition-all duration-300",
                          "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Work Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-8">Recent Work</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={`recent-${service.title}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

