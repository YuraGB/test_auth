import { Outlet } from 'react-router-dom';
import Logo from '../logo/index.jsx';
import classes from './main.module.css';

const Layout = () => {
  return (
    <main className={classes.main}>
      <Logo />
      <Outlet />
    </main>
  );
};

export default Layout;
