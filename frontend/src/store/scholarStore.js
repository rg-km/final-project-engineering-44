import create from "zustand";
import { persist } from "zustand/middleware";

const scholarStore = create(
  persist(
    (set) => ({
      beasiswa: [],
      setBeasiswa: (data) => {
        set({ beasiswa: data });
      },
    }),
    {
      name: "beasiswa-data",
      getStorage: () => sessionStorage,
    }
  )
);

export default scholarStore;
