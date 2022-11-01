import { instance } from '../auth/auth';

export const getGifts = async () => {
  const { data: result } = await instance.get('/gift');
  return result;
};

export const buyGifts = async data => {
  const { data: result } = await instance.patch('/gift', data);
  return result;
};
