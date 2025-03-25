import { createSlice } from "@reduxjs/toolkit";

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
    },

    logout: (state) => {
      state.isAuthenicated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
