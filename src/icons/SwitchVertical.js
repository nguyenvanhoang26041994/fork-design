import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('SwitchVertical', 'switch-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 8 7 4 11 8" />
  <line x1="7" y1="4" x2="7" y2="13" />
  <polyline points="13 16 17 20 21 16" />
  <line x1="17" y1="10" x2="17" y2="20" />
</svg>
));
