import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DeviceTv', 'device-tv', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <polyline points="16 3 12 7 8 3" />
</svg>
));
