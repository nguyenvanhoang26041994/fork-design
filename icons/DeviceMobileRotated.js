import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DeviceMobileRotated', 'device-mobile-rotated', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <g transform="rotate(90 12 12)">
  <rect x="7" y="4" width="10" height="16" rx="1" />
  <line x1="11" y1="5" x2="13" y2="5" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
    </g>
</svg>
));
