import create from "zustand";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookie = new Cookies();
const userStore = create((set) => ({
  user: {},
  setUser: () => {
    const token = cookie.get("token");
    if (token) {
      const data = jwtDecode(token);
      set({ user: data });
    } else {
      set({ user: {} });
    }
  },
}));

export default userStore;
