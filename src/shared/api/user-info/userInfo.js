import { instance } from 'shared/api/auth/auth';

export const getUserInfo = async () => {
  const { data: result } = await instance.get('user/info');
  return result;
};
