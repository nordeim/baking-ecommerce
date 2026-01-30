"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { TESTIMONIALS } from "@/data";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-bone-dark relative overflow-hidden">
      {/* Background Quote */}
      <div className="absolute top-20 left-10 opacity-[0.03]">
        <Quote className="h-64 w-64 text-burnt rotate-180" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-copper font-medium tracking-widest uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-burnt">
              Stories from the
              <span className="italic text-copper"> Kitchen</span>
            </h2>
          </div>
          <p className="text-burnt/70 max-w-md md:text-right">
            Join thousands of home bakers and professionals who have transformed 
            their craft through our intensive programs.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <Card className={`h-full bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-500 ${index === 0 ? 'flex flex-col' : ''}`}>
                <CardContent className={`p-6 ${index === 0 ? 'flex flex-col h-full' : ''}`}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className={`font-serif text-burnt mb-6 ${index === 0 ? 'text-2xl md:text-3xl leading-relaxed flex-1' : 'text-base'}`}>
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className={`relative rounded-full overflow-hidden ${index === 0 ? 'h-14 w-14' : 'h-10 w-10'}`}>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-burnt">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
