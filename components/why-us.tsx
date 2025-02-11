"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Clock, Heart, Star } from "lucide-react"

const features = [
  {
    icon: <Camera className="w-12 h-12 text-primary" />,
    title: "State-of-the-Art Equipment",
    description: "We use the latest high-end cameras and lenses to ensure your photos are of the highest quality.",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Quick Turnaround",
    description: "Receive your professionally edited photos within 48 hours of your session.",
  },
  {
    icon: <Heart className="w-12 h-12 text-primary" />,
    title: "Passion for Photography",
    description:
      "Our love for the art shines through in every shot we take, capturing the essence of your special moments.",
  },
  {
    icon: <Star className="w-12 h-12 text-primary" />,
    title: "Customized Experience",
    description: "We tailor each session to your unique style and preferences, ensuring a personalized photoshoot.",
  },
]

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-32 bg-secondary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-xl md:text-2xl text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

