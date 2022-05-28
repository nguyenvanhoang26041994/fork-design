import React, { lazy, Suspense } from 'react';

const lazyFunc = (importFunc: () => any, fallback = null) => {
  const LazyComponent = lazy(importFunc);

  const OutputComponent = (props: any): any => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return OutputComponent;
};

export default lazyFunc;
