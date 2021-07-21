import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowRightCircle', 'arrow-right-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <circle cx="5" cy="12" r="2" />
  <path d="M7 12h14" />
</svg>
));
