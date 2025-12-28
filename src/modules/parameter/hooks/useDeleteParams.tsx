import { deleteParamAction } from "../actions/deleteParamAction";

export const useDeleteParameter = () => {
  const deleteParameter = async (id: string) => {
    try {
      const response = await deleteParamAction(id);
      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return {
    deleteParameter,
  };
};
