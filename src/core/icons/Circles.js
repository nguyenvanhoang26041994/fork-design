import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Circles', 'circles', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <circle cx="6.5" cy="17" r="4" />
  <circle cx="17.5" cy="17" r="4" />
</svg>
));
