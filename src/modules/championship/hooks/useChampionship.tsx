import { useQuery } from "@tanstack/react-query";
import { getChampionshipAction } from "../actions/getChampionshipAction";
import type { FilterChampionship } from "../interfaces/FilterInterface";

export const useChampionship = (filter: FilterChampionship) => {
  return useQuery({
    queryKey: ["championship", filter],
    queryFn: () => getChampionshipAction(filter),
    staleTime: 1000 * 60 * 5, // minutos
  });
};
