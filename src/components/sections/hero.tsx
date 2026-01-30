"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen bg-bone overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Content - Asymmetric placement */}
          <motion.div 
            className="max-w-2xl lg:max-w-none pt-12 lg:pt-0 order-2 lg:order-1"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sourdough/20 text-burnt text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
              </span>
              New: Viennoiserie Intensive Workshop
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-burnt leading-[0.95] mb-6"
            >
              Master the
              <span className="block text-copper italic">Art</span>
              of Baking
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-burnt/70 max-w-lg mb-8 leading-relaxed"
            >
              From wild fermentation to laminated doughs, learn the chemistry and 
              craft behind world-class artisanal baking.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Trailer
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-bone overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Student"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium text-burnt">15,000+ Students</p>
                <p className="text-burnt/60">From 50+ Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Grid - Asymmetric Bento Layout */}
          <motion.div 
            className="relative order-1 lg:order-2 h-[500px] lg:h-[700px]"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[70%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
                alt="Artisan bread baking"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Secondary Image */}
            <motion.div 
              className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?w=800&q=80"
                alt="Croissant preparation"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              className="absolute bottom-[20%] right-[10%] bg-white rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-sourdough/30 flex items-center justify-center">
                  <span className="text-2xl">🥐</span>
                </div>
                <div>
                  <p className="font-serif text-burnt">Perfect Lamination</p>
                  <p className="text-xs text-muted-foreground">Lesson 3 of 12</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-20 left-10 w-32 h-32 rounded-full bg-sourdough/20 blur-3xl" />
            <div className="absolute -z-10 bottom-20 right-20 w-48 h-48 rounded-full bg-copper/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
