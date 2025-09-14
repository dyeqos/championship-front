import { ApiConnection } from "@/platform/connections/ApiConnection";

export const getParamDomain = async () => {
  const { data } = await ApiConnection.get<string[]>("/parameters/names");

  return data;
};
