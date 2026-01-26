import type { UseFormReturn } from "react-hook-form";
import type { RefetchOptions } from "@tanstack/react-query";
import { InputComponent } from "@/components/customs/input/InputComponent";
import { SelectComponent } from "@/components/customs/select/SelectComponent";
import { ButtonComponent } from "@/components/customs/button/ButtonComponent";
import { Search } from "lucide-react";
import type { FilterChampionship } from "../interfaces/FilterInterface";
import type { ValueDescription } from "@/interfaces/GlobalInterface";
interface Props {
  form: UseFormReturn<FilterChampionship>;
  onRefetch: (options?: RefetchOptions) => void;
  onReset: () => void;
}
const management = new Date().getFullYear();
const managements: ValueDescription[] = Array.from({ length: 5 }).map(
  (_, i) => ({
    value: management - i,
    description: (management - i).toString(),
  }),
);
export const FilterComponent = ({ form, onRefetch, onReset }: Props) => {
  const { handleSubmit } = form;
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
      onSubmit={handleSubmit(() => onRefetch())}
    >
      {/* Search */}
      <InputComponent
        form={form}
        name="name"
        placeholder="Buscar campeonato"
        icon={<Search />}
      />

      {/* Category Filter */}

      <SelectComponent
        form={form}
        placeholder="Todas la categorías"
        name="category"
        options={[{ value: "all", description: "Sub 20" }]}
      />
      {/* management Filter */}

      <SelectComponent
        form={form}
        placeholder="Gestión"
        name="management"
        options={managements}
      />

      {/* Status Filter */}
      <SelectComponent
        form={form}
        placeholder="Todos los estados"
        name="state"
        options={[{ value: "active", description: "Activo" }]}
      />

      {/* Clear Filters */}
      <ButtonComponent
        label="Limpiar Filtros"
        variant="secondary"
        onClick={onReset}
      />
    </form>
  );
};
