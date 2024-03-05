import { Link } from 'react-router-dom';
import classes from './navigation.module.css';
const Navigation = () => {
  return (
    <nav className={classes.root}>
      <ul className={classes.navigation}>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forgot">Forgot password</Link>
        </li>
        <li>
          <Link to="/reset">Reset password</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
