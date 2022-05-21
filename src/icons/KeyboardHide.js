import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('KeyboardHide', 'keyboard-hide', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="3" width="20" height="12" rx="2" />
  <line x1="6" y1="7" x2="6" y2="7" />
  <line x1="10" y1="7" x2="10" y2="7" />
  <line x1="14" y1="7" x2="14" y2="7" />
  <line x1="18" y1="7" x2="18" y2="7" />
  <line x1="6" y1="11" x2="6" y2="11.01" />
  <line x1="18" y1="11" x2="18" y2="11.01" />
  <line x1="10" y1="11" x2="14" y2="11" />
  <path d="M10 21l2 -2l2 2" />
</svg>
));
