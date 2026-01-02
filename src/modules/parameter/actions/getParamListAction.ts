import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";

export const getParamListAction = (): Promise<ParameterResponse[]> => {
  return ApiConnection.get("/parameters/all");
};
