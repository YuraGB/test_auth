/**
 *
 * @param error
 * @return {*|string}
 */
export const formatErrorMessage = (error) => {
  if (Array.isArray(error)) {
    return error.map(({ field_name, error }) => `${field_name ?? ''}: ${error ?? ''},`).join('/n');
  }

  if (typeof error === 'object') {
    return Object.keys(error)
      .map((key) => `${key}: ${error[key]}`)
      .join('/n');
  }

  if (error.message) {
    return error.message;
  }

  return error;
};
