import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as auth from '../auth/auth-operations';
import { register, login, logout } from "../../shared/auth/auth"


export const registerOperation = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    // const result = await auth.register(data)
    const result = await register(data)
    console.log(result)
    return result
  }
  catch (error) {
    return rejectWithValue(error)
  }
})

export const loginOperation = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const result = await login(data)
    return result
  }
  catch (error) {
    return rejectWithValue(error)
  }
})

export const logoutOperation = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const result = await logout()
    return result
  }
  catch (error) {
    return rejectWithValue(error)
  }
})
