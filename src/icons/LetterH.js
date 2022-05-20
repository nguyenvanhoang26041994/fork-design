import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('LetterH', 'letter-h', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="4" x2="17" y2="20" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="7" y1="4" x2="7" y2="20" />
</svg>
));
