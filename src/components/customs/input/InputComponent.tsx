import { cloneElement, isValidElement } from "react";
import type { ReactElement } from "react";
import {
  Controller,
  get,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormReturn,
  type ValidationRule,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  label?: string;
  name: Path<T>;
  isRequired?: boolean;
  placeholder?: string;
  isTextArea?: boolean;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  icon?: ReactElement<{ className: string }>;
}

export const InputComponent = <T extends FieldValues>(props: Props<T>) => {
  const {
    isRequired,
    form,
    label,
    name,
    placeholder,
    isTextArea,
    maxLength,
    minLength,
    icon,
  } = props;
  const {
    control,
    formState: { errors },
  } = form;
  const error = get<FieldErrors<T>>(errors, name);
  return (
    <div className="space-y-2">
      {label && (
        <Label
          htmlFor={name.toString()}
          className="text-sm font-medium bottom-2"
        >
          {label} {isRequired && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired ? "El campo es requerido" : false,
          maxLength,
          minLength,
        }}
        render={({ field }) =>
          isTextArea ? (
            <Textarea
              id={name.toString()}
              value={field.value ?? ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder={placeholder}
              rows={3}
            />
          ) : (
            <>
              {isValidElement(icon) &&
                cloneElement(icon, {
                  className:
                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4",
                })}
              <Input
                id={name.toString()}
                value={field.value ?? ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                placeholder={placeholder}
                className={`w-full ${icon ? "pl-10" : ""}  ${error ? "border-destructive" : ""}`}
              />
            </>
          )
        }
      />
      {error && (
        <div className="flex items-center gap-1 text-destructive text-xs">
          <AlertCircle className="h-3 w-3" />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};
