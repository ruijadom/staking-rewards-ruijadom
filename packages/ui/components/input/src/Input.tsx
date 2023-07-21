import * as React from "react"

import { cn } from "@ruijadom/utils"



/**
 * Input component props
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Additional class name for the component
   */
  className?: string;
}

/**
 * Input component implementation using forwardRef to allow the parent component to pass a ref to the underlying DOM element (input)
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <input
        type={type}
        className={cn(
          "pl-10 pr-2 py-2 flex w-full rounded-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"



