import * as React from "react";

import { cn } from "@ruijadom/utils"

/**
 * SheetBody component props
 */
interface SheetBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetBody component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table body)
 */
export const SheetBody = React.forwardRef<
  HTMLTableSectionElement,
  SheetBodyProps
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));

SheetBody.displayName = "SheetBody";
