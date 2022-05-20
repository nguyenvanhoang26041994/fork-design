import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Olympics', 'olympics', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="9" r="3" />
  <circle cx="18" cy="9" r="3" />
  <circle cx="12" cy="9" r="3" />
  <circle cx="9" cy="15" r="3" />
  <circle cx="15" cy="15" r="3" />
</svg>
));
