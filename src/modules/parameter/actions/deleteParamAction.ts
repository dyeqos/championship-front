import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";

export const deleteParamAction = async (id: string) => {
  return ApiConnection.delete<ParameterResponse>(`/parameters/${id}`);
};
