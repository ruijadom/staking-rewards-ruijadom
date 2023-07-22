import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableFooter component props
 */
interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableFooter component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table footer)
 */
export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));

TableFooter.displayName = "TableFooter";
