// store.ts
import { create } from "zustand";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

// Define types for state & actions
interface ParameterState {
  parameter: ParameterRequest;
  setFormParam: (data: ParameterRequest) => void;
  clearFormParam: () => void;
}

// Create store using the curried form of `create`
export const parameterStore = create<ParameterState>()((set) => ({
  // parameterList: [],
  parameter: {
    description: "",
    domain: "",
    id: null,
    isActive: false,
    name: "",
  },
  setFormParam: (parameter) =>
    set(() => ({
      parameter,
    })),
  clearFormParam: () => {
    set(() => ({
      parameter: {
        description: "",
        domain: "",
        id: null,
        isActive: false,
        name: "",
      },
    }));
  },
}));
