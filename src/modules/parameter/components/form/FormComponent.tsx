import { useForm } from "react-hook-form";

import { PanelCard } from "@/components/customs/PanelCard";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useParams } from "../../hooks/useParams";
import { SelectComponent } from "@/components/material/SelectComponent";
import type { ParameterRequest } from "../../interfaces/ParameterRequestInterface";

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ParameterRequest>({
    defaultValues: {
      description: "",
      domain: "",
      name: "",
    },
  });
  const { data } = useParams();

  const onSubmit = (data: ParameterRequest) => {
    console.log(data);
  };

  return (
    <PanelCard title="Agregar Nuevo Parámetro" className="shadow-sm">
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <SelectComponent
                name="domain"
                control={control}
                label="País"
                options={data ?? []}
                rules={{ required: "El país es obligatorio" }}
              />
            </div>

            <div className="space-y-2">
              <Input
                variant="material"
                label="Nombre"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && <p> Error name </p>}
            </div>

            <div className="space-y-2">
              <Input
                variant="material"
                label="Descripción"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description && <p> Error description </p>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground"
            >
              Guardar Parámetro
            </Button>
            <Button variant="outline" type="button">
              Limpiar formulario
            </Button>
          </div>
        </form>
      </CardContent>
    </PanelCard>
  );
};
