import { createSlice } from '@reduxjs/toolkit';

import { taskOperation, taskActiveOperation } from './task-operations';

const initialState = {
  taskWeek: {},
  taskActive: {},
  taskSingleActive: {},
  taskSwitch: {},
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: {
    [taskOperation.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [taskOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.taskWeek = payload;
    },
    [taskOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [taskActiveOperation.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [taskActiveOperation.fulfilled]: (store, { payload }) => {
      store.loading = false;
      console.log(payload);
      store.taskActive = payload;
    },
    [taskActiveOperation.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default taskSlice.reducer;
