import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableBody component props
 */
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableBody component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table body)
 */
export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));

TableBody.displayName = "TableBody";
