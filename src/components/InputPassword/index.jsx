import { Fragment, useState } from 'react';
import passwordValidationConfig from '../../utils/validation/passwordValidationConfig.js';
import ErrorMessage from '../errorMessage/index.jsx';
import PropTypes from 'prop-types';
import EyeIcon from '../eyeIcon/eyeIcon.jsx';
import classes from './inputPassword.module.css';

const InputPassword = ({
  isVisible,
  register,
  errors,
  label,
  watch,
  name = 'password',
  placeholder = 'Password',
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!isVisible) return null;

  if (name === 'confirm_password' && watch) {
    passwordValidationConfig.validate = (val) => {
      if (watch('password') !== val) {
        return 'Your passwords do no match';
      }
    };
  }

  return (
    <Fragment>
      <div className={classes.inputWrapper}>
        {label ? (
          <label htmlFor={'password'} className={classes.label}>
            {label}
          </label>
        ) : null}
        <div className={classes.inputContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            name={name}
            className={`input ${errors[name] ? 'error' : ''}`}
            {...register(name, passwordValidationConfig)}
          />
          <button
            type="button"
            className={classes.button}
            aria-label={'show password button'}
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon />
          </button>
        </div>
      </div>
      <ErrorMessage error={errors[name]} />
      {children}
    </Fragment>
  );
};

export default InputPassword;

InputPassword.propTypes = {
  isVisible: PropTypes.bool,
  register: PropTypes.func,
  errors: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  watch: PropTypes.func,
  children: PropTypes.node,
};
