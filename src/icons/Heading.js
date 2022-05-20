import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Heading', 'heading', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 12h10" />
  <path d="M7 4v16" />
  <path d="M17 4v16" />
  <path d="M15 20h4" />
  <path d="M15 4h4" />
  <path d="M5 20h4" />
  <path d="M5 4h4" />
</svg>
));
