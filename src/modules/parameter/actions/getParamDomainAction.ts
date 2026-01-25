import type { ValueDescription } from "@/interfaces/GlobalInterface";
import { ApiConnection } from "@/platform/connections/ApiConnection";

export const getParamDomainAction = async (): Promise<ValueDescription[]> => {
  return ApiConnection.get("/parameters/domains");
};
