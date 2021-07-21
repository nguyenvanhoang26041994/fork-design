import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacCapricorn', 'zodiac-capricorn', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4a3 3 0 0 1 3 3v9" />
  <path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
  <circle cx="16" cy="17" r="3" />
</svg>
));
