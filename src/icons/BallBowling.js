import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BallBowling', 'ball-bowling', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="11" y1="9" x2="11" y2="9.01" />
  <line x1="15" y1="8" x2="15" y2="8.01" />
  <line x1="14" y1="12" x2="14" y2="12.01" />
</svg>
));
