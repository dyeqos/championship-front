import { useState, useEffect } from "react";
import {
  Controller,
  type Control,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
};

type FloatingSelectInnerProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  label: string;
  options: Option[];
};

function FloatingSelectInner({
  field,
  fieldState,
  label,
  options,
}: Readonly<FloatingSelectInnerProps>) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = !!field.value;

  useEffect(() => {
    if (field.value) setIsFocused(true);
  }, [field.value]);

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none text-gray-500
          ${
            isFocused || hasValue
              ? "-top-2 text-xs bg-white px-1 text-blue-600"
              : "top-2 text-sm"
          } 
          ${fieldState.error ? "text-red-500" : ""}`}
      >
        {label}
      </label>

      <Select
        onValueChange={(val) => field.onChange(val)}
        value={field.value}
        onOpenChange={(open) => setIsFocused(open)}
      >
        <SelectTrigger
          className={`w-full h-12 rounded-md border px-3 pt-4 text-sm focus:ring-2
            ${fieldState.error ? "border-red-500" : "border-gray-300"}`}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {fieldState.error && (
        <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
      )}
    </div>
  );
}

type FloatingSelectProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label: string;
  options: Option[];
  rules?: Omit<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RegisterOptions<any, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
};

export function SelectComponent({
  name,
  control,
  label,
  options,
  rules,
}: Readonly<FloatingSelectProps>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FloatingSelectInner
          field={field}
          fieldState={fieldState}
          label={label}
          options={options}
        />
      )}
    />
  );
}
