import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Trademark', 'trademark', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.5 9h5m-2.5 0v6" />
  <path d="M13 15v-6l3 4l3 -4v6" />
</svg>
));
