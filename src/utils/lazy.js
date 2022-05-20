import React, { lazy, Suspense } from 'react';

const lazyFunc = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);

  const OutputComponent = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return OutputComponent;
};

export default lazyFunc;
