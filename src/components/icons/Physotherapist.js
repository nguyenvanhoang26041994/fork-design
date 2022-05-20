import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Physotherapist', 'physotherapist', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
  <circle cx="4" cy="19" r="1" />
  <circle cx="12" cy="6" r="1" />
  <path d="M12 17v-7" />
  <path d="M8 20h7l1 -4l4 -2" />
  <path d="M18 20h3" />
</svg>
));
