import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Power', 'power', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 6a7.75 7.75 0 1 0 10 0" />
  <line x1="12" y1="4" x2="12" y2="12" />
</svg>
));
