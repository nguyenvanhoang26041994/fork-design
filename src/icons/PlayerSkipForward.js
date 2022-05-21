import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('PlayerSkipForward', 'player-skip-forward', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5v14l12 -7z" />
  <line x1="20" y1="5" x2="20" y2="19" />
</svg>
));
