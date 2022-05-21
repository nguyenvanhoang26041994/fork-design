import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Number3', 'number-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12a4 4 0 1 0 -4 -4" />
  <path d="M8 16a4 4 0 1 0 4 -4" />
</svg>
));
