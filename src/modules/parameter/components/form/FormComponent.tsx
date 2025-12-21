import { useForm } from "react-hook-form";

import { PanelCard } from "@/components/customs/PanelCard";
import { Button } from "@/components/ui/button";
import { useParams } from "../../hooks/useParams";

import type { ParameterRequest } from "../../interfaces/ParameterRequestInterface";

import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent";

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
  //options={data ?? []}
  // control={control}
  //  rules={{ required: "El país es obligatorio" }}
  return (
    <PanelCard title="Agregar Nuevo Parámetro" className="shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <SelectComponent
              name="domain"
              options={[]}
              label="Tipo Parámetro"
            />
          </div>

          {/* <div className="space-y-2"> */}
          {/* <Input
              variant="material"
              label="Nombre"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && <p> Error name </p>} */}
          <InputComponent
            label="Nombre"
            {...register("name", {
              required: true,
            })}
          ></InputComponent>
          {/* </div> */}

          <div className="space-y-2">
            <InputComponent
              label="Descripción"
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && <p> Error description </p>}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" className="bg-primary text-primary-foreground">
            Guardar Parámetro
          </Button>
          <Button variant="outline" type="button">
            Limpiar formulario
          </Button>
        </div>
      </form>
    </PanelCard>
  );
};
