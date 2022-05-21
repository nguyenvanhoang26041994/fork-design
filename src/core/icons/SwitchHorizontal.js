import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('SwitchHorizontal', 'switch-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 3 20 7 16 11" />
  <line x1="10" y1="7" x2="20" y2="7" />
  <polyline points="8 13 4 17 8 21" />
  <line x1="4" y1="17" x2="13" y2="17" />
</svg>
));
