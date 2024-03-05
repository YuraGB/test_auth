import { useLoginForm } from './useLoginForm.js';
import InputPassword from '../../components/InputPassword/index.jsx';
import InputEmail from '../../components/InputEmail/index.jsx';
import ForgotPasswordLink from '../../components/forgotPasswordLink/index.jsx';
import FormActionsBlock from '../../components/formActionsBlock/index.jsx';

const LoginForm = () => {
  const { errors, responseError, isLoading, showPassword, handleSubmit, onSubmit, register } = useLoginForm();

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <InputEmail errors={errors} register={register} placeholder={'Work email'} />
      <InputPassword errors={errors} register={register} isVisible={showPassword}>
        <ForgotPasswordLink />
      </InputPassword>

      <FormActionsBlock responseError={responseError} isLoading={isLoading} buttonTitle={' Log in to Qencode'} />
    </form>
  );
};

export default LoginForm;
