import * as React from "react";

import { cn } from "@ruijadom/utils"

/**
 * SheetCell component props
 */
interface SheetCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetCell component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table cell)
 */
export const SheetCell = React.forwardRef<HTMLTableCellElement, SheetCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "h-8 align-middle [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
);

SheetCell.displayName = "SheetCell";
