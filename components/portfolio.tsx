"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const portfolioItems = [
  {
    title: "Wedding Bliss",
    category: "Wedding",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM%20(1)-fZzZS5qgTVwiIJJZvGd7zQlJh7CC36.jpeg",
    description: "Capturing love stories in their most beautiful moments",
  },
  {
    title: "Urban Exploration",
    category: "Street",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM-0wCMojJcYdH8NTHnFYovsFxFIIa03R.jpeg",
    description: "Documenting the pulse of city life through candid shots",
  },
  {
    title: "Natural Wonders",
    category: "Landscape",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM%20(2)-913QpBUYS5Q42KuOJtf9n9OKN2PgVv.jpeg",
    description: "Showcasing the breathtaking beauty of our world",
  },
  {
    title: "Portrait Perfection",
    category: "Portrait",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM-KrcnuAaXy0XqnI1R5cjHDtxK9Siddi.jpeg",
    description: "Revealing the unique essence of each individual",
  },
  {
    title: "Corporate Excellence",
    category: "Corporate",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM%20(1)-H288LvnKK8HHULPlFCIJqXlWosBvM8.jpeg",
    description: "Professional imagery for businesses and brands",
  },
  {
    title: "Event Excitement",
    category: "Event",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.30%20PM%20(2)-zYVMMQ1NEr9r1lMvvecY72OciDldGj.jpeg",
    description: "Preserving the energy and emotions of special gatherings",
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover aspect-[4/3] w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-lg md:text-xl text-white/80">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

