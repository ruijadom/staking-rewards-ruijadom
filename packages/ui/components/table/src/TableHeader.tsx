import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableHeader component props
 */
interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableHeader component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table header)
 */
export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("[&_tr]:border-b font-medium", className)}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";
