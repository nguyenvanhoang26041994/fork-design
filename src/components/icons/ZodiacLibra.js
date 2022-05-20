import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacLibra', 'zodiac-libra', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="20" x2="19" y2="20" />
  <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
</svg>
));
