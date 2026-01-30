"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-burnt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-cta" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" className="text-bone" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-copper/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-caramel/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone mb-6">
            Ready to Begin Your
            <span className="block italic text-copper">Journey?</span>
          </h2>

          <p className="text-lg md:text-xl text-bone/70 mb-8 max-w-2xl mx-auto">
            Join 15,000+ students mastering the art of baking. Start with our free 
            Sourdough Starter Guide, or dive into a comprehensive course.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="copper" className="group">
              Browse All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-bone/30 text-bone hover:bg-bone/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get Free Guide
            </Button>
          </div>

          <p className="mt-6 text-sm text-bone/50">
            No credit card required. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
