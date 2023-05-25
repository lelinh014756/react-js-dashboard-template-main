import Loadable from '@components/Loader/Loadable';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import Advance from '@pages/UIAdvance';
import Alert from '@pages/UIAdvance/Alert';
import Dialog from '@pages/UIAdvance/Dialog';
import ToggleButton from '@pages/UIAdvance/ToggleButton';
import Uploader from '@pages/UIAdvance/Uploader';
import UIBasic from '@pages/UIBasic';
import Progress from '@pages/UIBasic/Progress';
import User from '@pages/User';
import List from '@pages/User/List';
// import ListStyle1 from '@pages/User/List/ListStyle1';
import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

import ComponentsRoute from './childRoute/ComponentsRoute';

// lazy import
const ListStyle1 = Loadable(
  lazy(async () => import('@pages/User/List/ListStyle1')),
  <>Loading...</>
);

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: 'dashboard', element: <Home /> },
    {
      path: 'user',
      element: <User />,
      children: [
        {
          path: 'list',
          element: <List />,
          children: [
            {
              path: 'list-1',
              element: <ListStyle1 />,
            },
            {
              path: 'list-2',
              element: <div>list 2</div>,
            },
          ],
        },
      ],
    },
    ComponentsRoute,
    {
      path: 'advance',
      element: <Advance />,
      children: [
        {
          path: 'uploader',
          element: <Uploader />,
        },
        {
          path: 'dialog',
          element: <Dialog />,
        },
        {
          path: 'toggle-button',
          element: <ToggleButton />,
        },
        {
          path: 'alert',
          element: <Alert />,
        },
      ],
    },
    {
      path: 'basic',
      element: <UIBasic />,
      children: [
        {
          path: 'progress',
          element: <Progress />,
        },
      ],
    },
  ],
};

export default MainRoutes;
