import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Section', 'section', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 20h.01" />
  <path d="M4 20h.01" />
  <path d="M8 20h.01" />
  <path d="M12 20h.01" />
  <path d="M16 20h.01" />
  <path d="M20 4h.01" />
  <path d="M4 4h.01" />
  <path d="M8 4h.01" />
  <path d="M12 4h.01" />
  <path d="M16 4l0 0" />
  <rect x="4" y="8" width="16" height="8" rx="1" />
</svg>
));
