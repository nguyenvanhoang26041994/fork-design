import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('LetterK', 'letter-k', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="4" x2="7" y2="20" />
  <path d="M7 12h2l8 -8" />
  <line x1="9" y1="12" x2="17" y2="20" />
</svg>
));
