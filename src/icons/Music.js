import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Music', 'music', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="17" r="3" />
  <circle cx="16" cy="17" r="3" />
  <polyline points="9 17 9 4 19 4 19 17" />
  <line x1="9" y1="8" x2="19" y2="8" />
</svg>
));
