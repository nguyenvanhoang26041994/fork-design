import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TransferIn', 'transfer-in', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
  <path d="M4 14h9" />
  <path d="M10 11l3 3l-3 3" />
</svg>
));
