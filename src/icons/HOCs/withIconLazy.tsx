
import React from 'react';
import lazy from '../utils/lazy';

const withIconLazy = (displayName: string, importer: () => void) => {
  const LazyComponent = lazy(importer);
  const OutputComponent = (props: object) => <LazyComponent {...props} />;
  OutputComponent.displayName = displayName;
  return OutputComponent;
};

export default withIconLazy;
