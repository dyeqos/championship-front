import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

export const getParamListAction = (): Promise<Parameter[]> => {
  return ApiConnection.get("/parameters/all");
};
