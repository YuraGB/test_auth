import classes from '../../socialLogin.module.css';
import GoogleIcon from '../../../../components/GoogleIcon/index.jsx';

const GoogleButton = () => {
  return (
    <button type={'button'} className={classes.button}>
      <GoogleIcon /> Google
    </button>
  );
};

export default GoogleButton;
