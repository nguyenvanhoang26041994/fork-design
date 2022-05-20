import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Mars', 'mars', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="14" r="5" />
  <line x1="19" y1="5" x2="13.6" y2="10.4" />
  <line x1="19" y1="5" x2="14" y2="5" />
  <line x1="19" y1="5" x2="19" y2="10" />
</svg>
));
