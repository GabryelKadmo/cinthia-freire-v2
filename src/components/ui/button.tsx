import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-amber-600 text-white shadow-md hover:bg-amber-700 hover:shadow-lg transform",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg transform",
        outline:
          "border-2 border-amber-600 bg-transparent text-amber-600 hover:bg-amber-600 hover:text-white shadow-md hover:shadow-lg transform",
        secondary:
          "bg-slate-600 text-white shadow-md hover:bg-slate-700 hover:shadow-lg transform",
        ghost:
          "hover:bg-amber-600/10 hover:text-amber-600",
        link: "text-amber-600 underline-offset-4 hover:underline",
      }, size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
