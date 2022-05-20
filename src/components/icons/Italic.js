import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Italic', 'italic', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="11" y1="5" x2="17" y2="5" />
  <line x1="7" y1="19" x2="13" y2="19" />
  <line x1="14" y1="5" x2="10" y2="19" />
</svg>
));
