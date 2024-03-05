import { Fragment } from 'react';
import emailValidationConfig from '../../utils/validation/emailValidationConfig.js';
import ErrorMessage from '../errorMessage/index.jsx';
import PropTypes from 'prop-types';

const InputEmail = ({ register, errors, placeholder = 'Enter your email' }) => {
  return (
    <Fragment>
      <input
        type="text"
        placeholder={placeholder}
        name={'email'}
        className={`input ${errors.email ? 'error' : ''}`}
        {...register('email', emailValidationConfig)}
      />
      <ErrorMessage error={errors.email} />
    </Fragment>
  );
};

export default InputEmail;

InputEmail.propTypes = {
  register: PropTypes.func,
  placeholder: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.object,
  }),
};
