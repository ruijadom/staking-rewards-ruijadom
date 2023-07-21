import * as React from "react"

import { cn } from "@ruijadom/utils"

/**
 * SheetHeader component props
 */
interface SheetHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetHeader component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table header)
 */
export const SheetHeader = React.forwardRef<
  HTMLTableSectionElement,
  SheetHeaderProps
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b font-medium", className)} {...props} />
))

SheetHeader.displayName = "SheetHeader"