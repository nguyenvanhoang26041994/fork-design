import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Dots', 'dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
</svg>
));
