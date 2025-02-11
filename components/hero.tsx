"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-11%20at%203.21.31%20PM-0wCMojJcYdH8NTHnFYovsFxFIIa03R.jpeg"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-7xl md:text-9xl font-extrabold mb-6 parallax-text"
        >
          CAPTURE MOMENTS
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-8"
        >
          Transforming fleeting instants into timeless art
        </motion.p>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }}>
          <Button size="lg" className="text-xl md:text-2xl py-6 px-8">
            Book a Session
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

