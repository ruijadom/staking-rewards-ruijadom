import * as React from "react";

import { cn } from "@ruijadom/utils";

/**
 * TableCaption component props
 */
interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * TableCaption component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table caption)
 */
export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(
  (
    { className, ...props }: TableCaptionProps,
    ref: React.Ref<HTMLTableCaptionElement>,
  ) => (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
);

TableCaption.displayName = "TableCaption";
