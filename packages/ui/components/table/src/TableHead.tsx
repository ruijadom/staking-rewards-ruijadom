import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableHead component props
 */
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableHead component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table head)
 */
export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-8 text-left align-middle [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);

TableHead.displayName = "TableHead";
