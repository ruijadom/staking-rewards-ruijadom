import * as React from "react";

import { cn } from "@ruijadom/utils"

/**
 * SheetCaption component props
 */
interface SheetCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * SheetCaption component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table caption)
 */
export const SheetCaption = React.forwardRef<
  HTMLTableCaptionElement,
  SheetCaptionProps
>(
  (
    { className, ...props }: SheetCaptionProps,
    ref: React.Ref<HTMLTableCaptionElement>
  ) => (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);

SheetCaption.displayName = "SheetCaption";
