import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChartDonut2', 'chart-donut-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3v5m4 4h5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
