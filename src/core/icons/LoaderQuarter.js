import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('LoaderQuarter', 'loader-quarter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="6" x2="12" y2="3" />
  <line x1="6" y1="12" x2="3" y2="12" />
  <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
</svg>
));
