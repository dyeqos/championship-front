import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";

export const deleteParamAction = async (id: string) => {
  const { data } = await ApiConnection.delete<ParameterResponse>(
    `/parameters/${id}`
  );

  return data;
};
