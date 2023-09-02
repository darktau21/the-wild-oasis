import { lazy } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Error from '@pages/error';
import { ClearLayout, PrimaryLayout } from '@pages/layouts';
import Login from '@pages/login';
import { PAGE_PATHS } from '@shared/lib/react-router';

const Account = lazy(() => import('@pages/account'));
const Bookings = lazy(() => import('@pages/bookings'));
const Cabins = lazy(() => import('@pages/cabins'));
const Dashboard = lazy(() => import('@pages/dashboard'));
const Settings = lazy(() => import('@pages/settings'));
const UserList = lazy(() => import('@pages/users'));

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Navigate replace={true} to={PAGE_PATHS.login} />,
        index: true,
      },
      {
        element: <Account />,
        path: PAGE_PATHS.account,
      },
      {
        element: <Bookings />,
        path: PAGE_PATHS.bookings,
      },
      {
        element: <Cabins />,
        path: PAGE_PATHS.cabins,
      },
      {
        element: <Dashboard />,
        path: PAGE_PATHS.dashboard,
      },
      {
        element: <Settings />,
        path: PAGE_PATHS.settings,
      },
      {
        element: <UserList />,
        path: PAGE_PATHS.users,
      },
    ],
    element: <PrimaryLayout />,
  },
  {
    children: [
      {
        element: <Login />,
        path: PAGE_PATHS.login,
      },
    ],
    element: <ClearLayout />,
  },
  {
    element: <Error />,
    path: PAGE_PATHS.notFound,
  },
  {
    element: <Navigate to={PAGE_PATHS.notFound} />,
    path: '*',
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
