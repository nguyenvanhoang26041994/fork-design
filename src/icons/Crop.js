import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Crop', 'crop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 5v10a1 1 0 0 0 1 1h10" />
  <path d="M5 8h10a1 1 0 0 1 1 1v10" />
</svg>
));
