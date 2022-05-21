import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowRightBar', 'arrow-right-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 12h18" />
  <path d="M3 9v6" />
</svg>
));
