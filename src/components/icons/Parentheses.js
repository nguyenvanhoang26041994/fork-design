import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Parentheses', 'parentheses', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4a12.25 12.25 0 0 0 0 16" />
  <path d="M17 4a12.25 12.25 0 0 1 0 16" />
</svg>
));
