import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Skateboard', 'skateboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="15" r="2" />
  <circle cx="17" cy="15" r="2" />
  <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
</svg>
));
