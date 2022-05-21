import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowsDoubleSwNe', 'arrows-double-sw-ne', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3l-11 11" />
  <path d="M3 10v4h4" />
  <path d="M17 10h4v4" />
  <path d="M10 21l11 -11" />
</svg>
));
