import { PrimaryLayout } from '@app/layouts';
import Error from '@pages/error';
import { PAGE_PATHS } from '@shared/lib/react-router';
import { lazy } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

const Account = lazy(() => import('@pages/account'));
const Bookings = lazy(() => import('@pages/bookings'));
const Cabins = lazy(() => import('@pages/cabins'));
const Dashboard = lazy(() => import('@pages/dashboard'));
const Login = lazy(() => import('@pages/login'));
const Settings = lazy(() => import('@pages/settings'));
const Users = lazy(() => import('@pages/users'));

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace={true} to={PAGE_PATHS.login} />,
      },
      {
        path: PAGE_PATHS.account,
        element: <Account />,
      },
      {
        path: PAGE_PATHS.bookings,
        element: <Bookings />,
      },
      {
        path: PAGE_PATHS.cabins,
        element: <Cabins />,
      },
      {
        path: PAGE_PATHS.dashboard,
        element: <Dashboard />,
      },
      {
        path: PAGE_PATHS.settings,
        element: <Settings />,
      },
      {
        path: PAGE_PATHS.users,
        element: <Users />,
      },
      {
        path: PAGE_PATHS.notFound,
        element: <Error />,
      },
    ],
  },
  {
    path: PAGE_PATHS.login,
    element: <Login />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
