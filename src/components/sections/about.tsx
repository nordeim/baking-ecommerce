"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ArrowRight, ChefHat, Award, Users, Leaf } from "lucide-react";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  const features = [
    { icon: ChefHat, title: "Master Instructors", desc: "Learn from bakers with 20+ years experience" },
    { icon: Award, title: "Certified Courses", desc: "Industry-recognized completion certificates" },
    { icon: Users, title: "Community", desc: "Private forums and weekly live Q&As" },
    { icon: Leaf, title: "Sustainable", desc: "Zero-waste baking techniques taught" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Collage */}
          <motion.div 
            className="relative h-[600px] hidden lg:block"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Baker kneading dough"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
                alt="Fresh baked goods"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Frame */}
            <div className="absolute top-8 right-8 w-[40%] h-[40%] border-2 border-copper/30 rounded-2xl -z-10" />

            {/* Experience Badge */}
            <div className="absolute bottom-20 left-10 bg-burnt text-bone p-6 rounded-xl shadow-xl z-20">
              <div className="font-serif text-4xl mb-1">15+</div>
              <div className="text-sm text-bone/70">Years of<br/>Excellence</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-copper font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-burnt mb-6">
              Where Tradition Meets
              <span className="italic text-copper"> Precision</span>
            </h2>

            <div className="space-y-4 text-burnt/70 mb-8">
              <p>
                Founded in 2010 by Master Baker Marie-Claude Fontaine, L&apos;Artisan began as a 
                small workshop in Paris&apos; 11th arrondissement. What started as intimate weekend 
                classes has evolved into a global community of passionate bakers.
              </p>
              <p>
                Our philosophy bridges centuries-old fermentation techniques with modern 
                food science. We believe understanding the &ldquo;why&rdquo; behind every step transforms 
                good bakers into exceptional ones.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-sourdough/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-burnt" />
                  </div>
                  <div>
                    <h4 className="font-medium text-burnt">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Meet Our Instructors
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
