import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Hash', 'hash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="9" x2="19" y2="9" />
  <line x1="5" y1="15" x2="19" y2="15" />
  <line x1="11" y1="4" x2="7" y2="20" />
  <line x1="17" y1="4" x2="13" y2="20" />
</svg>
));
