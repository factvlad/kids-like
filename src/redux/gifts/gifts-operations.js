import { createAsyncThunk } from '@reduxjs/toolkit';

import { getGifts, buyGifts } from 'shared/api/gifts/gifts-api';

export const getGiftsOperation = createAsyncThunk(
  'gifts/getGifts',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getGifts();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const buyGiftsOperation = createAsyncThunk(
  'gifts/buyGifts',
  async (data, { rejectWithValue }) => {
    try {
      const result = await buyGifts(data);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
