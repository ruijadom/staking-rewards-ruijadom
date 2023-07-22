import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * Table component props
 */
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * Table component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table)
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }: TableProps, ref: React.Ref<HTMLTableElement>) => (
    <div className="w-full h-full">
      <table
        ref={ref}
        className={cn("w-full relative caption-top", className)}
        {...props}
      />
    </div>
  ),
);

Table.displayName = "Table";
