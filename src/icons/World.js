import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('World', 'world', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="3.6" y1="9" x2="20.4" y2="9" />
  <line x1="3.6" y1="15" x2="20.4" y2="15" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg>
));
