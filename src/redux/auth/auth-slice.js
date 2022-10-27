import { createSlice } from "@reduxjs/toolkit";
import { registerOperation, loginOperation, logoutOperation } from "./auth-operations"

const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerOperation.pending]: store => ({ ...store, loading: true, error: null }),
    [registerOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload
      store.isLogin = true;
    },
    [registerOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
    [loginOperation.pending]: store => ({ ...store, loading: true, error: null }),
    [loginOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload
      store.isLogin = true;
    },
    [loginOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
    [logoutOperation.pending]: store => ({ ...store, loading: true, error: null }),
    [logoutOperation.fulfilled]: (store, { payload }) => ({ ...initialState }),
    [logoutOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
  },
})

export default authSlice.reducer
