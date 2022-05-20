import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacCancer', 'zodiac-cancer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="12" r="3" />
  <path d="M3 12a10 6.5 0 0 1 14 -6.5" />
  <path d="M21 12a10 6.5 0 0 1 -14 6.5" />
</svg>
));
