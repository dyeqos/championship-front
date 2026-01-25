// store.ts
import { create } from "zustand";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

// Define types for state & actions
interface ParameterState {
  parameter: Parameter;
  setFormParam: (data: Parameter) => void;
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
