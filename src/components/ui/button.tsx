import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glow";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-blue text-white hover:bg-brand-blue-light": variant === "default",
            "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue/10 dark:border-brand-blue-light dark:text-brand-blue-light": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "text-brand-blue underline-offset-4 hover:underline": variant === "link",
            "bg-brand-blue text-white shadow-[0_0_15px_rgba(10,77,162,0.6)] hover:shadow-[0_0_25px_rgba(10,77,162,0.9)] hover:-translate-y-1": variant === "glow",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
