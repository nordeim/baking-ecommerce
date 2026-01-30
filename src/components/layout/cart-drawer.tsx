"use client";

import * as React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-2xl text-burnt flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            Your Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-24 w-24 rounded-full bg-sourdough/20 flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-sourdough" />
            </div>
            <h3 className="font-serif text-xl text-burnt mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">
              Discover our artisanal baking courses and tools
            </p>
            <Button onClick={() => setIsOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 py-4">
              <div className="space-y-4 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-border">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-bone-dark flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-lg text-burnt truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.instructor}</p>
                      <p className="font-medium text-caramel mt-1">{formatPrice(item.price)}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-bone-dark transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-bone-dark transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-4 bg-bone">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-burnt">Total</span>
                <span className="font-serif text-2xl text-burnt">{formatPrice(total)}</span>
              </div>

              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-muted-foreground hover:text-red-600 transition-colors py-2"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
