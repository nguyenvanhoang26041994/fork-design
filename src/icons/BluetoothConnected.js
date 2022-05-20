import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BluetoothConnected', 'bluetooth-connected', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 17 16 12 20 12 4 17 8 7 16" />
  <line x1="4" y1="12" x2="5" y2="12" />
  <line x1="18" y1="12" x2="19" y2="12" />
</svg>
));
