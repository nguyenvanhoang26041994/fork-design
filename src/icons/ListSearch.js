import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ListSearch', 'list-search', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="15" cy="15" r="4" />
  <path d="M18.5 18.5l2.5 2.5" />
  <path d="M4 6h16" />
  <path d="M4 12h4" />
  <path d="M4 18h4" />
</svg>
));
