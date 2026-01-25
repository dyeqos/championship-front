import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  label: string;
  name: Path<T>;
}
export const CheckboxComponent = <T extends FieldValues>(props: Props<T>) => {
  const { form, label, name } = props;
  const { control } = form;
  return (
    <div className="space-y-2">
      <Label htmlFor={name.toString()} className="text-sm font-medium">
        {label}
      </Label>
      <div className="flex items-center space-x-2 h-10">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <Switch
                id={name.toString()}
                checked={!!field.value}
                onCheckedChange={field.onChange}
              />
              <span className="text-sm text-muted-foreground">
                {field.value ? "Activo" : "Inactivo"}
              </span>
            </>
          )}
        />
      </div>
    </div>
  );
};
