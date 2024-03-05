import { RouterProvider } from 'react-router-dom';
import routes from '../../router/index.jsx';

const RouterComponent = () => {
  return <RouterProvider router={routes} />;
};

export default RouterComponent;
