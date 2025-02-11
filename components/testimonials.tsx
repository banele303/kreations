"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    role: "Bride",
    content:
      "KReations captured our wedding day perfectly. The photos are absolutely stunning and bring back such wonderful memories.",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg",
    role: "Corporate Client",
    content:
      "Professional, creative, and efficient. KReations delivered high-quality corporate headshots that elevated our brand image.",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg",
    role: "Model",
    content:
      "Working with KReations was a dream. They have an incredible eye for detail and made me feel comfortable throughout the shoot.",
  },
]

export const Testimonials = () => {
  return (
    <section className="py-32 bg-secondary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground mb-4">{testimonial.role}</p>
                  <p className="text-lg md:text-xl italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

