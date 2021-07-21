import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DeviceWatch', 'device-watch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="6" y="6" width="12" height="12" rx="3" />
  <path d="M9 18v3h6v-3" />
  <path d="M9 6v-3h6v3" />
</svg>
));
