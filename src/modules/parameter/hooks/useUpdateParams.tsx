import { updateParamAction } from "../actions/updateParamAction";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export const useUpdateParameter = () => {
  const updateParameter = async (id: string, param: ParameterRequest) => {
    try {
      const response = await updateParamAction(id, param);
      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return {
    updateParameter,
  };
};
