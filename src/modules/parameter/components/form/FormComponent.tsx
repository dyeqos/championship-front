import { type UseFormReturn } from "react-hook-form";
import { Pencil, Plus } from "lucide-react";
import { useParameter } from "../../hooks/useParams";
import { SelectComponent } from "@/components/customs/select/SelectComponent";
import { InputComponent } from "@/components/customs/input/InputComponent";
import { CheckboxComponent } from "@/components/customs/checkbox/CheckboxComponent";
import { ButtonComponent } from "@/components/customs/button/ButtonComponent";
import { PanelComponent } from "@/components/customs/panel/PanelComponent";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

interface Props {
  form: UseFormReturn<Parameter>;
  onSubmit: (data: Parameter) => void;
}

export const FormComponent = ({ form, onSubmit }: Props) => {
  const { paramDomainQuery } = useParameter();
  const { handleSubmit, getValues, reset } = form;

  const handleCancel = () => {
    reset({
      description: null,
      domain: null,
      id: null,
      isActive: false,
      name: null,
    });
  };

  const { data: paramDomain } = paramDomainQuery;

  return (
    <PanelComponent
      title={getValues("id") ? "Editar Parámetro" : "Crear Nuevo Parámetro"}
      icon={getValues("id") ? <Pencil /> : <Plus />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Domain Select */}
          <SelectComponent
            form={form}
            label="Dominio"
            name="domain"
            placeholder="Seleccione el dominio"
            options={paramDomain ?? []}
            isRequired
          />

          {/* Parámetro Name */}
          <InputComponent
            form={form}
            label="Nombre del Parámetro"
            name="name"
            isRequired={true}
            placeholder="e.g., United States"
          />

          {/* Active Toggle */}
          <CheckboxComponent
            form={form}
            label=" ¿Parámetro activo?"
            name="isActive"
          />
        </div>

        {/* Description */}
        <InputComponent
          form={form}
          label="Descripción"
          name="description"
          isTextArea={true}
          isRequired={true}
          minLength={{
            value: 3,
            message: "La descripción no debe ser menor a 3 caracteres",
          }}
          placeholder="Ingrese una descripción para el parámetro"
        />

        {/* Form Actions */}
        <div className="flex justify-end gap-2 mt-3">
          <ButtonComponent
            type="submit"
            label={getValues("id") ? "Actualizar Parámetro" : "Crear Parámetro"}
            icon={getValues("id") ? <Pencil /> : <Plus />}
          />

          {getValues("id") && (
            <ButtonComponent
              label="Cancelar"
              variant="outline"
              onClick={handleCancel}
            ></ButtonComponent>
          )}
        </div>
      </form>
    </PanelComponent>
  );
};
