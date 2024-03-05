import PropTypes from 'prop-types';
import classes from './pageTitle.module.css';

/**
 * PageTitle component
 *
 * @param {string} title
 * @return {JSX.Element|null}
 * @constructor
 */
const PageTitle = ({ title }) => {
  if (!title) return null;

  return <h1 className={classes.title}>{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
