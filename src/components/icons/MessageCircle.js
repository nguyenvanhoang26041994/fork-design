import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('MessageCircle', 'message-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
</svg>
));
