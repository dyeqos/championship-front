import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getParamDomainAction } from "../actions/getParamDomainAction";
import { getParamListAction } from "../actions/getParamListAction";
import { createUpdateParamAction } from "../actions/createUpdateParamAction";

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

  const mutation = useMutation({
    mutationFn: createUpdateParamAction,
    onSuccess: (_, variables) => {
      const { id } = variables;
      toast(`Parámetro ${id ? "Actualizado" : "Creado"}`);
      queryClient.invalidateQueries({ queryKey: [PARAMETERS] });
    },
  });

  return {
    paramListQuery,
    paramDomainQuery,
    mutation,
  };
};
