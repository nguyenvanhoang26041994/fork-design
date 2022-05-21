import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('PlayerTrackPrev', 'player-track-prev', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 5v14l-8 -7z" />
  <path d="M10 5v14l-8 -7z" />
</svg>
));
