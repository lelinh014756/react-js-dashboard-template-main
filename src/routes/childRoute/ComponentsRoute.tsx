import Loadable from '@components/Loader/Loadable';
import SkeletonCardContent1 from '@components/Skeleton/SkeletonCardContent1';
import ComponentsUI from '@pages/ComponentsUI';
import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

// lazy import
const Autocomplete = Loadable(
  lazy(async () => import('@pages/ComponentsUI/Autocomplete')),
  <SkeletonCardContent1 title="Autocomplete" />
);
const Button = Loadable(
  lazy(async () => import('@pages/ComponentsUI/Button')),
  <SkeletonCardContent1 title="Button" />
);
const Select = Loadable(
  lazy(async () => import('@pages/ComponentsUI/Select')),
  <SkeletonCardContent1 title="Select Control" />
);

const ComponentsRoute: RouteObject = {
  path: 'components',
  element: <ComponentsUI />,
  children: [
    {
      path: 'autocomplete',
      element: <Autocomplete />,
    },
    {
      path: 'button',
      element: <Button />,
    },
    {
      path: 'select',
      element: <Select />,
    },
  ],
};

export default ComponentsRoute;
