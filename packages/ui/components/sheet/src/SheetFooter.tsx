import * as React from "react"

import { cn } from "@ruijadom/utils"

/**
 * SheetFooter component props
 */
interface SheetFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetFooter component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table footer)
 */
export const SheetFooter = React.forwardRef<
  HTMLTableSectionElement,
  SheetFooterProps
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
))

SheetFooter.displayName = "SheetFooter"
