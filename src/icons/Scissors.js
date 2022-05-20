import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Scissors', 'scissors', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="7" r="3" />
  <circle cx="6" cy="17" r="3" />
  <line x1="8.6" y1="8.6" x2="19" y2="19" />
  <line x1="8.6" y1="15.4" x2="19" y2="5" />
</svg>
));
