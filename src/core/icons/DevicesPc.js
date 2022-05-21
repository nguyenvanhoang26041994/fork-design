import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DevicesPc', 'devices-pc', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 5h6v14h-6z" />
  <path d="M12 9h10v7h-10z" />
  <path d="M14 19h6" />
  <path d="M17 16v3" />
  <path d="M6 13v.01" />
  <path d="M6 16v.01" />
</svg>
));
