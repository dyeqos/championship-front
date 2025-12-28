import { createParamAction } from "../actions/createParamAction";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export const useCreateParameter = () => {
  const createParameter = async (parameter: ParameterRequest) => {
    try {
      const response = await createParamAction(parameter);
      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return {
    createParameter,
  };
};
