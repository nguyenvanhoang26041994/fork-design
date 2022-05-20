import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowBottomSquare', 'arrow-bottom-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 7v14" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M14 3v4h-4v-4z" />
</svg>
));
