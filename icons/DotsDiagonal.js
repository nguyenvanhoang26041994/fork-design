import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('DotsDiagonal', 'dots-diagonal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="17" cy="7" r="1" />
</svg>
));
