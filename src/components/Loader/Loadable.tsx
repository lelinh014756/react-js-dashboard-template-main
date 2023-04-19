/* eslint-disable react/display-name */
import React, { Suspense } from 'react';

function Loadable<T>(
  Component: React.ComponentType<T & JSX.IntrinsicAttributes>,
  FallbackComponent?: React.ReactNode
) {
  const ComponentWithExtraInfo = (props: T & JSX.IntrinsicAttributes) => (
    <Suspense fallback={FallbackComponent}>
      <Component {...props} />
    </Suspense>
  );

  return ComponentWithExtraInfo;
}

export default Loadable;
