import { Controller, type UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, AlertCircle } from "lucide-react";
import type { ParameterRequest } from "../../interfaces/ParameterRequestInterface";

const DOMAINS = ["CHAMPIONSHIP"];

interface Props {
  form: UseFormReturn<ParameterRequest>;
  onSubmit: (data: ParameterRequest) => void;
}

export const FormComponent = ({ form, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = form;

  const handleCancel = () => {
    reset({
      description: null,
      domain: null,
      id: null,
      isActive: false,
      name: null,
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getValues("id") ? (
            <>
              <Pencil className="h-5 w-5" />
              Editar Parámetro
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" />
              Crear Nuevo Parámetro
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Domain Select */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-sm font-medium">
                Dominio <span className="text-destructive">*</span>
              </Label>
              <Controller
                name="domain"
                control={control}
                rules={{ required: "El campo dominio es obligatorio" }}
                render={({ field }) => (
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      className={errors.domain ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select a domain..." />
                    </SelectTrigger>

                    <SelectContent>
                      {DOMAINS.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.domain && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.domain.message ?? "Error en el campo"}</span>
                </div>
              )}
            </div>

            {/* Parámetro Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Parámetro Nombre <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="e.g., United States"
                {...register("name", {
                  required: "El nombre es requerido",
                  minLength: {
                    value: 3,
                    message: "El nombre no debe ser menor a 3 caracteres",
                  },
                })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.name.message}</span>
                </div>
              )}
            </div>

            {/* Active Toggle */}
            <div className="space-y-2">
              <Label htmlFor="active" className="text-sm font-medium">
                ¿Parámetro activo?
              </Label>
              <div className="flex items-center space-x-2 h-10">
                <Controller
                  name="isActive"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Switch
                        id="active"
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
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Descripción <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter a description for this parameter..."
              {...register("description", {
                required: "La descripción es obligatorio",
                minLength: {
                  value: 3,
                  message: "La descripción no debe ser menor a 3 caracteres",
                },
              })}
              rows={3}
            />
            {errors.description && (
              <div className="flex items-center gap-1 text-destructive text-xs">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.description.message}</span>
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex gap-2">
            <Button type="submit" className="flex-1 md:flex-none">
              {getValues("id") ? (
                <>
                  <Pencil className="h-4 w-4 mr-2" />
                  Actualizar Parámetro
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Parámetro
                </>
              )}
            </Button>
            {getValues("id") && (
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
