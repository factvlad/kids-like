import { instance } from 'shared/auth/auth';

export const getUserInfo = async () => {
  const { data: result } = await instance.get('user/info');
  return result;
};
