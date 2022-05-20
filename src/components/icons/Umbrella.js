import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Umbrella', 'umbrella', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12a8 8 0 0 1 16 0z" />
  <path d="M12 12v6a2 2 0 0 0 4 0" />
</svg>
));
