import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { Championship } from "../interfaces/ChampionshipInterface";
import type { FilterChampionship } from "../interfaces/FilterInterface";

export const getChampionshipAction = (
  params: FilterChampionship,
): Promise<Championship[]> => {
  return ApiConnection.get("/championship/", {
    params,
  });
};
