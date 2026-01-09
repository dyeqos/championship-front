import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export const createUpdateParamAction = async (
  parameter: ParameterRequest
): Promise<ParameterResponse> => {
  const { id } = parameter;
  return ApiConnection({
    url: id ? `/parameters/${id}` : "/parameters",
    method: id ? "PATCH" : "POST",
    data: parameter,
  });
};
