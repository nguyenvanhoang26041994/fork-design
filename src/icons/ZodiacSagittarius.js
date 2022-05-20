import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ZodiacSagittarius', 'zodiac-sagittarius', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="4" />
  <path d="M13 4h7v7" />
  <line x1="6.5" y1="12.5" x2="11.5" y2="17.5" />
</svg>
));
