import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export const createParamAction = async (parameter: ParameterRequest) => {
  return ApiConnection.post<ParameterResponse[]>("/parameters", parameter);
};
