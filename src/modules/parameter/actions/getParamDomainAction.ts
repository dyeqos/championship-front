import type { ValueDescription } from "@/interfaces/GlobalInterface";
import { ApiConnection } from "@/platform/connections/ApiConnection";

export const getParamDomainAction = async () => {
  return ApiConnection.get<ValueDescription[]>("/parameters/domains");
};
