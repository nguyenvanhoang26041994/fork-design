import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowTopBar', 'arrow-top-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="21" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <line x1="9" y1="21" x2="15" y2="21" />
</svg>
));
