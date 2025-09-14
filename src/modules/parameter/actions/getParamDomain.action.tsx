import type { ValueDescription } from "@/interfaces/GlobalInterface";
import { ApiConnection } from "@/platform/connections/ApiConnection";

export const getParamDomain = async () => {
  const { data } = await ApiConnection.get<ValueDescription[]>(
    "/parameters/domains"
  );

  return data;
};
