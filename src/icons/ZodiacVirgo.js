import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacVirgo', 'zodiac-virgo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 4a2 2 0 0 1 2 2v9" />
  <path d="M5 6a2 2 0 0 1 4 0v9" />
  <path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
  <path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
</svg>
));
