import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('StairsUp', 'stairs-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4v-4h4v-4h4v-4h4" />
  <path d="M4 11l7 -7v4m-4 -4h4" />
</svg>
));
