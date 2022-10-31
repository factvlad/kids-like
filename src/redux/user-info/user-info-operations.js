import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'shared/auth/auth';
import { getUserInfo } from 'shared/api/user-info/userInfo';

export const getUserInfoOperation = createAsyncThunk(
  'user/info',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue('token is invalid');
      }
      setToken(token);
      const result = await getUserInfo();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
