import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as auth from '../auth/auth-operations';
import { register, login, logout } from '../../shared/api/auth/auth';
import { getUserInfoOperation } from 'redux/user-info/user-info-operations';
import { clearUserInfo } from 'redux/user-info/user-info-slise';

export const registerOperation = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      // const result = await auth.register(data)
      const result = await register(data);
      console.log(result);
      await dispatch(getUserInfoOperation(result.token));
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginOperation = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await login(data);
      await dispatch(getUserInfoOperation(result.token));
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutOperation = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await logout();
      dispatch(clearUserInfo());
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
