"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { name: "Editing pictures (standard)", price: "R150" },
  { name: "Photo manipulation", price: "R650" },
  { name: "Magazine covers", price: "R250" },
  { name: "Album covers", price: "R250" },
  { name: "Book covers", price: "R250" },
  { name: "Flyer/Poster", price: "R350" },
  { name: "Business cards", price: "R180" },
  { name: "Video editing", price: "Coming soon" },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Services & Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

