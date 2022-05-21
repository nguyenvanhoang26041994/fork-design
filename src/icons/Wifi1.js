import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Wifi1', 'wifi-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
</svg>
));
