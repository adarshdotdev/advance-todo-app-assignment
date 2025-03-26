import { createSlice } from "@reduxjs/toolkit";

const loadAuthState = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

interface AuthState {
  isAuthenicated: boolean;
}

const initialState: AuthState = {
  isAuthenicated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenicated = true;
      localStorage.setItem("isAuthenticated", "true");
    },

    logout: (state) => {
      state.isAuthenicated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
