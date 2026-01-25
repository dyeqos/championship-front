import { Trophy } from "lucide-react";
import { useForm } from "react-hook-form";
//import { ChampionshipMotionComponent } from "../components/championships/ChampionshipMotionComponent";
import { TitleComponent } from "@/components/customs/title/TitleComponent";
import { FilterComponent } from "../components/FilterComponent";
import { ChampionshipsComponent } from "../components/ChampionshipMotionComponent";
import { useChampionship } from "../hooks/useChampionship";
import type { FilterChampionship } from "../interfaces/FilterInterface";

const management = new Date().getFullYear().toString();
export const ChampionshipPage = () => {
  const form = useForm<FilterChampionship>({
    defaultValues: {
      management,
    },
  });

  const resetFilter = () => form.reset({ management });

  const { data, refetch } = useChampionship(form.getValues());

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <TitleComponent title="Campeonatos" icon={<Trophy />} />

      {/* Filters */}

      <FilterComponent form={form} onRefetch={refetch} onReset={resetFilter} />

      {/* Championships Cards Grid */}
      {/* <ChampionshipMotionComponent championships={filteredChampionships} /> */}

      <ChampionshipsComponent
        championships={data ?? []}
        onReset={resetFilter}
      />
    </div>
  );
};
