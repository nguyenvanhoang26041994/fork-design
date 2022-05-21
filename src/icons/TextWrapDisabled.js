import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('TextWrapDisabled', 'text-wrap-disabled', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="14" y2="6" />
  <line x1="4" y1="18" x2="14" y2="18" />
  <path d="M4 12h17l-3 -3m0 6l3 -3" />
</svg>
));
