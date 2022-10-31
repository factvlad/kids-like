import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import taskReduser from './task/task-slice';
import userReducer from './user-info/user-info-slise';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  task: taskReduser,
  userInfo: userReducer,
});

export default rootReducer;
