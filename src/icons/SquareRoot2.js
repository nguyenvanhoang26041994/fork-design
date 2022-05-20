import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('SquareRoot2', 'square-root-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
  <path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
  <path d="M3 12h1l3 8l3 -16h10" />
</svg>
));
