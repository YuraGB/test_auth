import classes from './errorMessage.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error = '' }) => {
  return error ? <p className={classes.message}>{error.message ? error.message : error}</p> : null;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.object]),
};
