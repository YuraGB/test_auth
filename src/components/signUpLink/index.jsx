import { Link } from 'react-router-dom';
import classes from './signUpLink.module.css';

const SignUpLink = () => (
  <p className={classes.root}>
    Is your company new to Qencode? <Link to={'/signUp'}>Sign up</Link>
  </p>
);

export default SignUpLink;
