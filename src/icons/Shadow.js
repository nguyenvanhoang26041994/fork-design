import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Shadow', 'shadow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M13 12h5" />
  <path d="M13 15h4" />
  <path d="M13 18h1" />
  <path d="M13 9h4" />
  <path d="M13 6h1" />
</svg>
));
