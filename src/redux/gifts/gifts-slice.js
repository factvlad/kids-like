import { createSlice } from '@reduxjs/toolkit';
import { getGiftsOperation, buyGiftsOperation } from './gifts-operations';

const initialState = {
  allGifts: {},
  purchaseGifts: {},
  loading: false,
  error: null,
};

const giftsSlice = createSlice({
  name: 'gifts',
  initialState,
  extraReducers: {
    [getGiftsOperation.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getGiftsOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.allGifts = payload;
    },
    [getGiftsOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
    [buyGiftsOperation.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [buyGiftsOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.purchaseGifts = payload;
    },
    [buyGiftsOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: true,
      error: payload,
    }),
  },
});

export default giftsSlice.reducer;
