export const EMAIL_MAX = 256;
export const MIN = 1;

export const VALIDATE_MESSAGES = {
  required: {
    msg: 'The field must not be empty'
  },
  maxText: {
    msg: (max: number) => `Maximum number of characters ${max}`
  },
  email: {
    msg: 'Wrong email'
  }
};
