import { ApiConnection } from "@/platform/connections/ApiConnection";

const httpGetChampionship = () => ApiConnection.get("/championship");
export const ChampionshipDomain = () => {
  const getChampionships = () => {
    return httpGetChampionship();
  };

  return {
    getChampionships,
  };
};
