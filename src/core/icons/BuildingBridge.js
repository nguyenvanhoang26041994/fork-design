import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BuildingBridge', 'building-bridge', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="18" y1="5" x2="18" y2="19" />
  <line x1="2" y1="15" x2="22" y2="15" />
  <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
  <line x1="12" y1="10" x2="12" y2="15" />
</svg>
));
