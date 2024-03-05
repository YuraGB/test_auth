import { Link } from 'react-router-dom';
import classes from './forgotPasswordLink.module.css';
import { memo } from 'react';

const ForgotPasswordLink = () => {
  return (
    <div className={classes.link}>
      <Link to="/forgot">Forgot your password?</Link>
    </div>
  );
};

export default memo(ForgotPasswordLink);
