import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('School', 'school', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
</svg>
));
