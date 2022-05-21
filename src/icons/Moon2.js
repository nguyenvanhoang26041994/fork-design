import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Moon2', 'moon-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.418 4.157a8 8 0 0 0 0 15.686" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
