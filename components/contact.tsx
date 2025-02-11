"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Change to named export
export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Surname" />
              </div>
              <Input placeholder="Company name (optional)" />
              <Input type="email" placeholder="Email" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Country code" />
                <Input placeholder="Phone Number" />
              </div>
              <Textarea placeholder="Write Your Message" className="min-h-[150px]" />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Email: kerakreations13@gmail.com</p>
          <p className="text-muted-foreground">Phone: 069 393 6860</p>
        </div>
      </div>
    </section>
  )
}

