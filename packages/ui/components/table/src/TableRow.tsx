import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableRow component props
 */
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableRow component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table row)
 */
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("data-[state=selected]:bg-muted", className)}
      {...props}
    />
  ),
);

TableRow.displayName = "TableRow";
