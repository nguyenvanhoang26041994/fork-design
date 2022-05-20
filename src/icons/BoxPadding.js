import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BoxPadding', 'box-padding', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M8 16v.01" />
  <path d="M8 12v.01" />
  <path d="M8 8v.01" />
  <path d="M16 16v.01" />
  <path d="M16 12v.01" />
  <path d="M16 8v.01" />
  <path d="M12 8v.01" />
  <path d="M12 16v.01" />
</svg>
));
