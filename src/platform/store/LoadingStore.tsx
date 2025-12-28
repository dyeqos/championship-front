// store.ts
import { create } from "zustand";

// Define types for state & actions
interface LoadingState {
  active: boolean;
  setActive: (state: boolean) => void;
}

// Create store using the curried form of `create`
export const loadingStore = create<LoadingState>()((set) => ({
  active: false,
  setActive: (state) =>
    set(() => ({
      active: state,
    })),
}));
