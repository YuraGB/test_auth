import ErrorMessage from '../errorMessage/index.jsx';
import PropTypes from 'prop-types';

const FormActionsBlock = ({ children, responseError, isLoading, buttonTitle, classes }) => {
  return (
    <section className={`actions ${classes}`}>
      <ErrorMessage error={responseError} />
      <button
        type="submit"
        className={`primary-button ${responseError ? 'error' : ''}`}
        disabled={isLoading || responseError}
      >
        {buttonTitle}
      </button>
      {children}
    </section>
  );
};

export default FormActionsBlock;

FormActionsBlock.propTypes = {
  children: PropTypes.node,
  responseError: PropTypes.string,
  isLoading: PropTypes.bool,
  buttonTitle: PropTypes.string,
  classes: PropTypes.string,
};
