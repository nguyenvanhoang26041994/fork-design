import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('PlayCard', 'play-card', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect transform="rotate(90 12 12)" x="3" y="5" width="18" height="14" rx="2" />
  <line x1="8" y1="6" x2="8.01" y2="6" />
  <line x1="16" y1="18" x2="16.01" y2="18" />
  <path d="M12 16l-3 -4l3 -4l3 4z" />
</svg>
));
