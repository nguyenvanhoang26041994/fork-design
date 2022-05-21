import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ToggleLeft', 'toggle-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="8" cy="12" r="2" />
  <rect x="2" y="6" width="20" height="12" rx="6" />
</svg>
));
