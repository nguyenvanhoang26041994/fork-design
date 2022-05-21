import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Disc', 'disc', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="1" />
  <path d="M7 12a5 5 0 0 1 5 -5" />
  <path d="M12 17a5 5 0 0 0 5 -5" />
</svg>
));
