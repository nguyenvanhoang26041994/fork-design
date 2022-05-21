import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('LineDotted', 'line-dotted', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v.01" />
  <path d="M8 12v.01" />
  <path d="M12 12v.01" />
  <path d="M16 12v.01" />
  <path d="M20 12v.01" />
</svg>
));
