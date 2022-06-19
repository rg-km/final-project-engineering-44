import create from "zustand";

const userStore = create((set) => ({
  user: [],
  setUser: (state) => set({ state }),
}));

const useStore = create({});
