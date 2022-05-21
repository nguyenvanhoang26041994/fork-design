import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BorderStyle2', 'border-style-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 18v.01" />
  <path d="M8 18v.01" />
  <path d="M12 18v.01" />
  <path d="M16 18v.01" />
  <path d="M20 18v.01" />
  <path d="M18 12h2" />
  <path d="M11 12h2" />
  <path d="M4 12h2" />
  <path d="M4 6h16" />
</svg>
));
