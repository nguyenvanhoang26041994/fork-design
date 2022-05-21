import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('BrandTidal', 'brand-tidal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
</svg>
));
