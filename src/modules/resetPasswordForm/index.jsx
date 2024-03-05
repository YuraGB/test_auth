import classes from '../forgotPasswordForm/forgotPasswordForm.module.css';
import InputPassword from '../../components/InputPassword/index.jsx';
import { useResetPasswordForm } from './useResetPasswordForm.js';
import ErrorMessage from '../../components/errorMessage/index.jsx';

const ResetPasswordForm = () => {
  const { errors, handleSubmit, watch, onSubmit, register, responseError, isLoading } = useResetPasswordForm();
  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <InputPassword label={'Password'} errors={errors} register={register} isVisible={true} />
      <InputPassword
        errors={errors}
        register={register}
        isVisible={true}
        label={'Confirm password'}
        name={'confirm_password'}
        watch={watch}
      />

      <section className={'actions'}>
        <ErrorMessage error={responseError} />
        <button
          type="submit"
          className={`primary-button ${classes.button} ${responseError ? 'error' : ''}`}
          disabled={isLoading || responseError}
        >
          Reset Password
        </button>
      </section>
    </form>
  );
};

export default ResetPasswordForm;
