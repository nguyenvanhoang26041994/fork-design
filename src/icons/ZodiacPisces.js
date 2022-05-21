import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacPisces', 'zodiac-pisces', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 3a21 21 0 0 1 0 18" />
  <path d="M19 3a21 21 0 0 0 0 18" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
