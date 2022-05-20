import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacTaurus', 'zodiac-taurus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 3a6 6 0 0 0 12 0" />
  <circle cx="12" cy="15" r="6" />
</svg>
));
