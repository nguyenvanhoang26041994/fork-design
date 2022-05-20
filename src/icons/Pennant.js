import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Pennant', 'pennant', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="12" y2="21" />
  <line x1="10" y1="21" x2="10" y2="3" />
  <path d="M10 4l9 4l-9 4" />
</svg>
));
