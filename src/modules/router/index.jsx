import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../../components/layout/index.jsx';
import Login from '../../pages/login/index.jsx';
import ResetPassword from '../../pages/resetPassword/index.jsx';
import ForgotPassword from '../../pages/forgotPassword/index.jsx';
import Home from '../../pages/home/index.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Route>,
  ),
);

export default routes;
