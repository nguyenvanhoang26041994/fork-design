
import React from 'react';
import lazy from '../utils/lazy';

const withIconLazy = (displayName, importer) => {
  const LazyComponent = lazy(importer);
  const OutputComponent = (props) => <LazyComponent {...props} />;
  OutputComponent.displayName = displayName;
  return OutputComponent;
};

export default withIconLazy;