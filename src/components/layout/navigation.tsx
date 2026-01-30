"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/store/cart";
import { NAV_ITEMS } from "@/data";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cart = useCart();
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const totalItems = cart.getTotalItems();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-bone/90 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="font-serif text-2xl md:text-3xl font-medium text-burnt">
              L&apos;Artisan
            </span>
            <span className="block text-xs font-sans text-caramel tracking-widest uppercase">
              Baking Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-burnt/80 hover:text-burnt copper-underline transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={() => cart.setIsOpen(true)}
              className="relative p-2 text-burnt hover:text-burnt-light transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge 
                  variant="copper" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-burnt" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:max-w-sm">
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle className="font-serif text-2xl text-burnt">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1 p-6">
                  {NAV_ITEMS.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-burnt/80 hover:text-burnt py-3 border-b border-border/50 transition-colors"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: "animate-in 0.3s ease-out forwards",
                        opacity: 0
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-bone border-t border-border">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => {
                      setMobileOpen(false);
                      cart.setIsOpen(true);
                    }}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    View Cart ({totalItems})
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
