import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export const updateParamAction = async (
  id: string,
  parameter: ParameterRequest
) => {
  const { data } = await ApiConnection.patch<ParameterResponse>(
    `/parameters/${id}`,
    parameter
  );

  return data;
};
