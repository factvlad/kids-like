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
  extraReducers: {
    [getUserInfoOperation.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getUserInfoOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.token = payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [getUserInfoOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
  },
});

export default userInfoSlise.reducer;
