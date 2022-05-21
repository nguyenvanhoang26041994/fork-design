import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('AntennaBars2', 'antenna-bars-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="15" />
  <line x1="10" y1="18" x2="10" y2="18.01" />
  <line x1="14" y1="18" x2="14" y2="18.01" />
  <line x1="18" y1="18" x2="18" y2="18.01" />
</svg>
));
