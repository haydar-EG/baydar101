import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-base focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent-base text-accent-foreground hover:bg-accent-hover",
        secondary: "border-transparent bg-surface-elevated text-text-secondary hover:bg-surface-hover",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "text-text-secondary border-border-base hover:bg-surface-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
