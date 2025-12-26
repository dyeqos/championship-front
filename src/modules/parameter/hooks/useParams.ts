import { useQuery } from "@tanstack/react-query";
import { getParamDomainAction } from "../actions/getParamDomainAction";
import { getParamListAction } from "../actions/getParamListAction";

export const useParameter = () => {
  const paramListQuery = useQuery({
    queryKey: ["params"],
    queryFn: getParamListAction,
  });

  const paramDomainQuery = useQuery({
    queryKey: ["params", "domains"],
    queryFn: getParamDomainAction,
  });
  return {
    paramListQuery,
    paramDomainQuery,
  };
};
