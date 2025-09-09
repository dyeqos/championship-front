import * as React from "react";

import { cn } from "@/platform/tools/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        material:
          "h-14 rounded-lg border-2 border-border bg-background/50 px-4 pt-6 pb-2 transition-all duration-200 placeholder:text-transparent focus:border-primary focus:bg-background focus:outline-none focus:ring-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, label, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      setHasValue(e.target.value !== "");
      props.onBlur?.(e);
    };

    React.useEffect(() => {
      if (props.value || props.defaultValue) {
        setHasValue(true);
      }
    }, [props.value, props.defaultValue]);

    if (variant === "material" && label) {
      return (
        <div className="relative">
          <input
            type={type}
            className={cn(inputVariants({ variant }), className)}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          <label
            className={cn(
              "absolute left-4 text-muted-foreground transition-all duration-200 pointer-events-none",
              focused || hasValue
                ? "top-2 text-xs text-primary"
                : "top-1/2 -translate-y-1/2 text-base"
            )}
          >
            {label}
          </label>
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// eslint-disable-next-line react-refresh/only-export-components
export { Input, inputVariants };
