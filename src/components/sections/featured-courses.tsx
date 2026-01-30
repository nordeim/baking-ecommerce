"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useCart } from "@/lib/store/cart";
import { FEATURED_COURSES } from "@/data";
import { formatPrice } from "@/lib/utils";
import { Clock, BookOpen, Star, ShoppingCart, Check } from "lucide-react";

export function FeaturedCourses() {
  const prefersReducedMotion = useReducedMotion();
  const { addItem, items } = useCart();

  const isInCart = (courseId: string) => items.some(item => item.id === courseId);

  return (
    <section id="courses" className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-burnt mb-6">
            Curated <span className="text-copper italic">Courses</span>
          </h2>
          <p className="text-lg text-burnt/70">
            Intensive programs designed by master bakers. From your first sourdough 
            starter to complex laminated doughs.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`flex ${index === 0 ? "flex-col md:flex-row" : "flex-col"} h-full`}>
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${index === 0 ? "md:w-1/2 h-64 md:h-auto" : "h-52"}`}>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-burnt">
                        {course.level}
                      </Badge>
                      {course.originalPrice && (
                        <Badge variant="copper">Save {Math.round((1 - course.price/course.originalPrice) * 100)}%</Badge>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="secondary" 
                        className="bg-white text-burnt hover:bg-bone"
                        onClick={() => addItem(course)}
                        disabled={isInCart(course.id)}
                      >
                        {isInCart(course.id) ? (
                          <><Check className="mr-2 h-4 w-4" /> In Cart</>
                        ) : (
                          <><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {course.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" /> {course.lessons} lessons
                      </span>
                    </div>

                    <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-copper transition-colors">
                      {course.title}
                    </CardTitle>

                    <CardDescription className="mb-4 line-clamp-2">
                      {course.description}
                    </CardDescription>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <div>
                        <span className="font-serif text-2xl text-burnt">{formatPrice(course.price)}</span>
                        {course.originalPrice && (
                          <span className="ml-2 text-sm text-muted-foreground line-through">
                            {formatPrice(course.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-copper text-copper" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-muted-foreground">({course.reviewCount})</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {course.tags.map(tag => (
                        <span key={tag} className="text-xs text-burnt/60 bg-bone-dark px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
