import { useState } from "react";
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
import { loadingStore } from "@/platform/store/LoadingStore";
import { parameterStore } from "../../store/ParameterStore";
import { useCreateParameter } from "../../hooks/useCreateParams";
import { useUpdateParameter } from "../../hooks/useUpdateParams";
import { useParameter } from "../../hooks/useParams";

export const FormComponent = () => {
  const storeLoading = loadingStore();
  const store = parameterStore();
  const parameter = parameterStore((state) => state.parameter);
  const { createParameter } = useCreateParameter();
  const { updateParameter } = useUpdateParameter();
  const { paramListQuery } = useParameter();

  const [errors, setErrors] = useState({
    domain: false,
    name: false,
  });

  const DOMAINS = ["CHAMPIONSHIP"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    storeLoading.setActive(true);

    if (!validateForm()) {
      storeLoading.setActive(false);
      return;
    }
    let isSuccess: boolean = false;
    if (parameter.id) {
      isSuccess = await updateParameter(parameter.id, parameter);
    } else {
      isSuccess = await createParameter(parameter);
    }
    if (isSuccess) {
      paramListQuery.refetch();
      // Reset form
      store.clearFormParam();
      setErrors({ domain: false, name: false });
    }
    storeLoading.setActive(false);
  };

  const validateForm = () => {
    const newErrors = {
      domain: !parameter.domain,
      name: !parameter.name,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleCancel = () => {
    store.clearFormParam();
    setErrors({ domain: false, name: false });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {parameter.id ? (
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Domain Select */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-sm font-medium">
                Dominio <span className="text-destructive">*</span>
              </Label>
              <Select
                value={parameter.domain}
                onValueChange={(value) => {
                  store.setFormParam({ ...parameter, domain: value });
                  setErrors({ ...errors, domain: false });
                }}
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
              {errors.domain && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>Dominio es requerido</span>
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
                value={parameter.name}
                onChange={(e) => {
                  store.setFormParam({ ...parameter, name: e.target.value });
                  setErrors({ ...errors, name: false });
                }}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>Parámetro nombre es requerido</span>
                </div>
              )}
            </div>

            {/* Active Toggle */}
            <div className="space-y-2">
              <Label htmlFor="active" className="text-sm font-medium">
                Active Status
              </Label>
              <div className="flex items-center space-x-2 h-10">
                <Switch
                  id="active"
                  checked={parameter.isActive}
                  onCheckedChange={(checked) =>
                    store.setFormParam({ ...parameter, isActive: checked })
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {parameter.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Descripción{" "}
              <span className="text-muted-foreground text-xs">(Optional)</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter a description for this parameter..."
              value={parameter.description}
              onChange={(e) =>
                store.setFormParam({
                  ...parameter,
                  description: e.target.value,
                })
              }
              rows={3}
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-2">
            <Button type="submit" className="flex-1 md:flex-none">
              {parameter.id ? (
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
            {parameter.id && (
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
