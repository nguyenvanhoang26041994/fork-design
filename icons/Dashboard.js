import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Dashboard', 'dashboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="2" />
  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
  <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
</svg>
));
