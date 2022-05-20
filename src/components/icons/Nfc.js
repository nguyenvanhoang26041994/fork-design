import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Nfc', 'nfc', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" />
  <path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" />
  <rect x="4" y="4" width="16" height="16" rx="3" />
</svg>
));
