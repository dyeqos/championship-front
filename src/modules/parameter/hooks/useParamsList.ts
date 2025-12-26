import { useQuery } from "@tanstack/react-query";
import { getParamDomain } from "../actions/getParamDomain.action";

export const useParamsList = () => {
  return useQuery({
    queryKey: ["paramsList", "domains"],
    queryFn: getParamDomain,
  });
};
