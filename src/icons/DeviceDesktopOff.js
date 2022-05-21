import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('DeviceDesktopOff', 'device-desktop-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1m-4 0h-12a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));
