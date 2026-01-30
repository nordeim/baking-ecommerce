"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Course } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (course: Course) => void;
  removeItem: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (course: Course) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === course.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === course.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ items: [...items, { ...course, quantity: 1 }] });
        }
      },

      removeItem: (courseId: string) => {
        set({ items: get().items.filter((item) => item.id !== courseId) });
      },

      updateQuantity: (courseId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(courseId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === courseId ? { ...item, quantity } : item
          )
        });
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set({ isOpen: !get().isOpen }),

      setIsOpen: (isOpen: boolean) => set({ isOpen }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    }),
    {
      name: "cart-storage",
      skipHydration: true
    }
  )
);
