import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getParamDomainAction } from "../actions/getParamDomainAction";
import { getParamListAction } from "../actions/getParamListAction";

const PARAMETERS = "parameters";
const DOMAINS = "domains";

export const useParameter = () => {
  const queryClient = useQueryClient();

  const paramListQuery = useQuery({
    queryKey: [PARAMETERS],
    queryFn: getParamListAction,
  });

  const paramDomainQuery = useQuery({
    queryKey: [PARAMETERS, DOMAINS],
    queryFn: getParamDomainAction,
  });

  const refreshAllParams = () => {
    queryClient.invalidateQueries({ queryKey: [PARAMETERS] });
  };
  return {
    paramListQuery,
    paramDomainQuery,
    refreshAllParams,
  };
};
