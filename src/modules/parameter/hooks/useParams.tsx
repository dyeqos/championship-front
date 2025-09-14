import { useQuery } from "@tanstack/react-query";
import { getParamDomain } from "../actions/getParamDomain.action";

export const useParams = () => {
  return useQuery({
    queryKey: ["params", "domains"],
    queryFn: getParamDomain,
  });
};
