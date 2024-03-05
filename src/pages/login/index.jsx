import PageTitle from '../../components/pageTitle/index.jsx';

import classes from './login.module.css';
import LoginForm from '../../modules/loginForm/index.jsx';
import SocialLogin from '../../modules/socialLogin/index.jsx';
import Separator from '../../components/separator/index.jsx';
import SignUpLink from '../../components/signUpLink/index.jsx';

const Login = () => {
  return (
    <article className={classes.root}>
      <PageTitle title={'Log in to your account'} />
      <div className={'socialWrapper'}>
        <SocialLogin />
      </div>
      <Separator />
      <LoginForm />
      <section className={classes.signUp}>
        <SignUpLink />
      </section>
    </article>
  );
};

export default Login;
