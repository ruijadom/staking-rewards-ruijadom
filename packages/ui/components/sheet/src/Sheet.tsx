import * as React from "react";

import { cn } from "@ruijadom/utils"

/**
 * Sheet component props
 */
interface SheetProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * Sheet component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (table)
 */
export const Sheet = React.forwardRef<HTMLTableElement, SheetProps>(
  ({ className, ...props }: SheetProps, ref: React.Ref<HTMLTableElement>) => (
    <div className="w-full h-full ">
      <table
        ref={ref}
        className={cn(
          "w-full relative caption-top border-collapse text-xs leading-xs font-normal",
          className
        )}
        {...props}
      />
    </div>
  )
);

Sheet.displayName = "Sheet";
