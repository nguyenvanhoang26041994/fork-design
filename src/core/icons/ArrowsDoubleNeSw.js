import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDoubleNeSw', 'arrows-double-ne-sw', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 14l11 -11" />
  <path d="M10 3h4v4" />
  <path d="M10 17v4h4" />
  <path d="M21 10l-11 11" />
</svg>
));
