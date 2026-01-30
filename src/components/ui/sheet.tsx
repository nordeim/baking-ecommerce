"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
}

const SheetContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

const useSheet = () => {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("useSheet must be used within Sheet");
  return context;
};

const Sheet: React.FC<SheetProps> = ({ children, open: controlledOpen, onOpenChange }) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = onOpenChange ?? setUncontrolledOpen;

  return (
    <SheetContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const SheetTrigger: React.FC<SheetTriggerProps> = ({ children, asChild }) => {
  const { onOpenChange } = useSheet();

  const handleClick = React.useCallback(() => {
    onOpenChange(true);
  }, [onOpenChange]);

  if (asChild && React.isValidElement(children)) {
    // Type-safe clone with explicit props typing
    const child = children as React.ReactElement<{
      onClick?: React.MouseEventHandler;
    }>;

    return React.cloneElement(child, {
      onClick: handleClick
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

const SheetContent: React.FC<SheetContentProps> = ({ 
  children, 
  className,
  side = "right" 
}) => {
  const { open, onOpenChange } = useSheet();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed z-50 bg-bone shadow-2xl transition-transform duration-500 ease-out",
          "top-0 h-full w-full sm:max-w-md",
          side === "right" ? "right-0" : "left-0",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-charcoal" />
        </button>
        {children}
      </div>
    </>
  );
};

const SheetHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
    {children}
  </div>
);

const SheetTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <h2 className={cn("font-serif text-2xl text-charcoal", className)}>
    {children}
  </h2>
);

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle };
