import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChevronDownLeft', 'chevron-down-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8v8h8" />
</svg>
));
