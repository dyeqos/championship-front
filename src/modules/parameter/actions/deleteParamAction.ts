import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

export const deleteParamAction = async (id: string) => {
  return ApiConnection.delete<Parameter>(`/parameters/${id}`);
};
