import {
  Controller,
  get,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { ValueDescription } from "@/frames/interfaces/ValueDescriptionInterface";
import { AlertCircle } from "lucide-react";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  label: string;
  name: Path<T>;
  options: ValueDescription[];
  isRequired?: boolean;
  placeholder?: string;
}

export const SelectComponent = <T extends FieldValues>(props: Props<T>) => {
  const { isRequired, form, label, name, options, placeholder } = props;
  const {
    control,
    formState: { errors },
  } = form;
  const error = get<FieldErrors<T>>(errors, name);
  console.log(error);
  return (
    <>
      <Label htmlFor={name.toString()} className="text-sm font-medium">
        {label} <span className="text-destructive">*</span>
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired ? "El campo es requerido" : false,
        }}
        render={({ field }) => (
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <SelectTrigger className={error ? "border-destructive" : ""}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={String(option.value)}>
                  {option.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <div className="flex items-center gap-1 text-destructive text-xs">
          <AlertCircle className="h-3 w-3" />
          <span>{error.message ?? "Error en el campo"}</span>
        </div>
      )}
    </>
  );
};
