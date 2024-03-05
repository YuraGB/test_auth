import GoogleButton from './components/googleButton/index.jsx';
import GitButton from './components/gitButton/index.jsx';
import classes from './socialLogin.module.css';

const SocialLogin = () => {
  return (
    <section className={classes.root}>
      <GoogleButton />
      <GitButton />
    </section>
  );
};

export default SocialLogin;
