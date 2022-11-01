import { createAsyncThunk } from '@reduxjs/toolkit';

import * as task from '../../shared/api/task/task';

export const taskOperation = createAsyncThunk(
  'task/task',
  async (data, { rejectWithValue }) => {
    try {
      const result = await task.task(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const taskActiveOperation = createAsyncThunk(
  'task/taskActive',
  async (data, { rejectWithValue }) => {
    try {
      const result = await task.taskActive(data);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const taskSingleActiveOperation = createAsyncThunk(
  'task/taskSingleActive',
  async (data, { rejectWithValue }) => {
    try {
      const result = await task.taskSingleActive(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const taskSwitchOperation = createAsyncThunk(
  'task/taskSwitch',
  async (data, { rejectWithValue }) => {
    try {
      const result = await task.taskSwitch(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
