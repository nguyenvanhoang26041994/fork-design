import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ArrowBottomCircle', 'arrow-bottom-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 7v14" />
  <path d="M9 18l3 3l3 -3" />
  <circle cx="12" cy="5" r="2" />
</svg>
));
