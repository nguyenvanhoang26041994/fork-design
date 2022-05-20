import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ClearFormatting', 'clear-formatting', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 15l4 4m0 -4l-4 4" />
  <path d="M7 6v-1h11v1" />
  <line x1="7" y1="19" x2="11" y2="19" />
  <line x1="13" y1="5" x2="9" y2="19" />
</svg>
));
