import ForgotPasswordForm from '../../modules/forgotPasswordForm/index.jsx';
import PageTitle from '../../components/pageTitle/index.jsx';

const ForgotPassword = () => {
  return (
    <article className={'authWrapper'}>
      <PageTitle title={'Forgot Password?'} />
      <ForgotPasswordForm />
    </article>
  );
};

export default ForgotPassword;
