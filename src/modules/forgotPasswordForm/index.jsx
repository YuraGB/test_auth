import classes from './forgotPasswordForm.module.css';
import InputEmail from '../../components/InputEmail/index.jsx';
import { useForgotPasswordForm } from './useForgotPasswordForm.js';
import FormActionsBlock from '../../components/formActionsBlock/index.jsx';

const ForgotPasswordForm = () => {
  const { errors, isLoading, handleSubmit, responseError, onSubmit, register, onCancel } = useForgotPasswordForm();

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <InputEmail errors={errors} register={register} />
      <FormActionsBlock
        responseError={responseError}
        isLoading={isLoading}
        buttonTitle={' send'}
        classes={classes.action}
      >
        <button type="button" className={`secondary-button  ${classes.button}`} onClick={onCancel}>
          Cancel
        </button>
      </FormActionsBlock>
    </form>
  );
};

export default ForgotPasswordForm;
