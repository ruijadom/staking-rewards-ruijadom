import * as React from "react"

import { cn } from "@ruijadom/utils"

/**
 * SheetHead component props
 */
interface SheetHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetHead component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table head)
 */
export const SheetHead = React.forwardRef<
  HTMLTableCellElement,
  SheetHeadProps
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-8 text-left align-middle [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))

SheetHead.displayName = "SheetHead"
