// store.ts
import { create } from "zustand";
import type { ParameterResponse } from "../interfaces/ParameterResponseInterface";

// Define types for state & actions
interface ParameterState {
  parameterList: ParameterResponse[];
  getParameterList: () => ParameterResponse[];
  setParameterList: (data: ParameterResponse[]) => void;
}

// Create store using the curried form of `create`
export const parameterStore = create<ParameterState>()((set, get) => ({
  parameterList: [],
  getParameterList: () => get().parameterList,
  setParameterList: (parameterList) =>
    set(() => ({
      parameterList,
    })),
}));
