import classes from '../../socialLogin.module.css';
import GitHubIcon from '../../../../components/GitHubIcon/index.jsx';

const GitButton = () => {
  return (
    <button type={'button'} className={classes.button}>
      <GitHubIcon /> GitHub
    </button>
  );
};

export default GitButton;
