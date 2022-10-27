export const fields = {
  email: {
    name: 'email',
    placeholder: 'your@email.com',
    type: 'email',
    required: true,
    // pattern: 'S+@[a-z]+.[a-z]+',
    title:
      'The email must contain only Latin lowercase letters, @ and  a dot without spaces For example - butterfly@mail.com',
  },
  password: {
    name: 'password',
    placeholder: 'your@email.com',
    type: 'password',
    required: true,
    title:
      'The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01',
  },
};
