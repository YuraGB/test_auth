import PageTitle from '../../components/pageTitle/index.jsx';
import ResetPasswordForm from '../../modules/resetPasswordForm/index.jsx';

const ResetPassword = () => {
  return (
    <article className={'authWrapper'}>
      <PageTitle title={'Create new Password?'} />
      <ResetPasswordForm />
    </article>
  );
};

export default ResetPassword;
