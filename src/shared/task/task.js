import { instance } from 'shared/auth/auth';

export const task = async obj => {
  const { data: result } = await instance.post('task', obj);
  return result;
};

export const taskActive = async data => {
  const { data: result } = await instance.patch('task/active', data);
  return result;
};

export const taskSingleActive = async ({ taskId, days }) => {
  const { data: result } = await instance.patch(
    `task/single-active/${taskId}`,
    days
  );
  return result;
};

export const taskSwitch = async ({ taskId, date }) => {
  const { data: result } = await instance.patch(`task/switch/${taskId}`, date);
  return result;
};
