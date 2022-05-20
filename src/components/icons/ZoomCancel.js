import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZoomCancel', 'zoom-cancel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="8" y1="8" x2="12" y2="12" />
  <line x1="12" y1="8" x2="8" y2="12" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
));
