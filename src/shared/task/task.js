import { instance } from 'shared/auth/auth';

export const task = async obj => {
  const { data } = await instance.post('task', obj);
  return data;
};

export const taskActive = async data => {
  const result = await instance.patch('task/active', data);
  console.log(result);
  return result;
};

export const taskSingleActive = async data => {
  const { result } = await instance.patch(`task/single-active`, data);
  return result;
};

export const taskSwitch = async (taskId, data) => {
  const { result } = await instance.patch(`task/switch/${taskId}`, data);
  return result;
};
