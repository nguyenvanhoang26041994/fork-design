import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Rss', 'rss', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="19" r="1" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <path d="M4 11a9 9 0 0 1 9 9" />
</svg>
));
