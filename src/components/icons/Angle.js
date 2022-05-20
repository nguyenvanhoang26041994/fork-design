import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Angle', 'angle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 19h-18l9 -15" />
  <path d="M20.615 15.171h.015" />
  <path d="M19.515 11.771h.015" />
  <path d="M17.715 8.671h.015" />
  <path d="M15.415 5.971h.015" />
</svg>
));
