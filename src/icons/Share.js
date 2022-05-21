import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Share', 'share', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="18" cy="18" r="3" />
  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
</svg>
));
