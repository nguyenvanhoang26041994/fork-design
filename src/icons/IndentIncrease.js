import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('IndentIncrease', 'indent-increase', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="6" x2="9" y2="6" />
  <line x1="20" y1="12" x2="13" y2="12" />
  <line x1="20" y1="18" x2="9" y2="18" />
  <path d="M4 8l4 4l-4 4" />
</svg>
));
