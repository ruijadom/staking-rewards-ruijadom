import * as React from "react"

import { cn } from "@ruijadom/utils"

/**
 * SheetHeader component props
 */
interface SheetRowProps extends React.HTMLAttributes<HTMLTableRowElement>
{
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetHeader component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table row)
 */
export const SheetRow = React.forwardRef<
  HTMLTableRowElement,
  SheetRowProps
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))

SheetRow.displayName = "SheetRow"