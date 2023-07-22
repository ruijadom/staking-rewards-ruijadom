import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableCell component props
 */
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableCell component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table cell)
 */
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "h-8 align-middle [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);

TableCell.displayName = "TableCell";
