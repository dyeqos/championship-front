import { ApiConnection } from "@/platform/connections/ApiConnection";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";

export const getParamListAction = async () => {
  const { data } = await ApiConnection.get<ParameterResponse[]>(
    "/parameters/all"
  );

  return data;
};
