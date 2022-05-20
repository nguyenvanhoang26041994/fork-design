import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Divide', 'divide', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle fill="currentColor" cx="12" cy="6" r="1" />
  <circle fill="currentColor" cx="12" cy="18" r="1" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
