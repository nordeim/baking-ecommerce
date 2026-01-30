"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield, Clock, BookOpen } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bone pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-32 w-32 rounded-full bg-sourdough/20 flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="h-16 w-16 text-sourdough" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-burnt mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-burnt/70 mb-8 max-w-md mx-auto">
              Discover our artisanal baking courses and begin your journey to mastery.
            </p>
            <Link href="/">
              <Button size="lg">
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bone pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-burnt mb-2">
                Shopping Cart
              </h1>
              <p className="text-burnt/70">
                {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <button
              onClick={clearCart}
              className="text-sm text-muted-foreground hover:text-red-600 transition-colors self-start md:self-auto"
            >
              Clear Cart
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1">
                              <span className="text-xs font-medium text-copper uppercase tracking-wider">
                                {item.category}
                              </span>
                              <h3 className="font-serif text-xl text-burnt mt-1 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                By {item.instructor}
                              </p>

                              <div className="flex items-center gap-4 text-sm text-burnt/70">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" /> {item.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-4 w-4" /> {item.lessons} lessons
                                </span>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="font-serif text-xl text-burnt">
                                {formatPrice(item.price)}
                              </div>
                            </div>
                          </div>

                          <Separator className="my-4" />

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-bone-dark transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-bone-dark transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-burnt mb-6">
                      Order Summary
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-burnt/70">Subtotal</span>
                        <span className="font-medium">{formatPrice(total)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-burnt/70">Discount</span>
                        <span className="font-medium text-green-600">-$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-burnt/70">Tax</span>
                        <span className="font-medium">Calculated at checkout</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between mb-6">
                      <span className="font-serif text-lg text-burnt">Total</span>
                      <span className="font-serif text-2xl text-burnt">{formatPrice(total)}</span>
                    </div>

                    <Button size="lg" className="w-full mb-4">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Link href="/">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-border space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Shield className="h-4 w-4 text-copper" />
                        <span>Secure SSL Checkout</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-4 w-4 text-copper" />
                        <span>30-Day Money Back Guarantee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
