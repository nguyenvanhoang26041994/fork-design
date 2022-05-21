import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('LetterR', 'letter-r', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
  <line x1="12" y1="13" x2="17" y2="20" />
</svg>
));
