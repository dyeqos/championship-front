import { Button } from "@/components/ui/button";
import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
} from "react";
interface Prop extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  label: string;
  icon?: ReactElement<{ className: string }>;
}

export const ButtonComponent = ({
  type = "button",
  variant,
  label,
  icon,
  ...props
}: Prop) => {
  return (
    <Button type={type} variant={variant ?? "default"} {...props}>
      {isValidElement(icon) &&
        cloneElement(icon, {
          className: "h-4 w-4 mr-2",
        })}
      {label}
    </Button>
  );
};
