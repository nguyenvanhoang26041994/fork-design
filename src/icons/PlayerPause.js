import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('PlayerPause', 'player-pause', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="6" y="5" width="4" height="14" rx="1" />
  <rect x="14" y="5" width="4" height="14" rx="1" />
</svg>
));
