export default {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password should be at least 8 characters',
  },
  maxLength: {
    value: 100,
    message: 'Password should be at most 100 characters',
  },
};
