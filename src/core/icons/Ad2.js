import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Ad2', 'ad-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.933 5h-6.933v16h13v-8" />
  <path d="M14 17h-5" />
  <path d="M9 13h5v-4h-5z" />
  <path d="M15 5v-2" />
  <path d="M18 6l2 -2" />
  <path d="M19 9h2" />
</svg>
));
