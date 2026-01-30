import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-burnt text-bone hover:bg-burnt/80",
        secondary: "border-transparent bg-sourdough text-charcoal hover:bg-sourdough/80",
        outline: "text-burnt border-burnt/20",
        copper: "border-transparent bg-copper text-white hover:bg-copper/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
