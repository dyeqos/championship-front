import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

export const createUpdateParamAction = async (
  parameter: Parameter,
): Promise<Parameter> => {
  const { id } = parameter;
  return ApiConnection({
    url: id ? `/parameters/${id}` : "/parameters",
    method: id ? "PATCH" : "POST",
    data: parameter,
  });
};
