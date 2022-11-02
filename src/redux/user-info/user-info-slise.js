import { createSlice } from '@reduxjs/toolkit';

import { getUserInfoOperation } from './user-info-operations';

const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
};

const userInfoSlise = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    clearUserInfo: state => {
      state.user = {};
      state.loading = false;
      state.isLogin = false;
      state.error = null;
    },
  },
  extraReducers: {
    [getUserInfoOperation.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getUserInfoOperation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.token = payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [getUserInfoOperation.rejected]: (state, { payload }) => ({
      ...state,
      loading: true,
      error: payload,
    }),
  },
});
export const { clearUserInfo } = userInfoSlise.actions;
export default userInfoSlise.reducer;
