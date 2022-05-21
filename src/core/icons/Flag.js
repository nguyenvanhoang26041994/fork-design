import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Flag', 'flag', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="5" x2="5" y2="21" />
  <line x1="19" y1="5" x2="19" y2="14" />
  <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
  <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
</svg>
));
