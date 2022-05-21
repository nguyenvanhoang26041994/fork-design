import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('ChartPie4', 'chart-pie-4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12l-6.5 5.5" />
  <path d="M12 3v9h9" />
  <circle cx="12" cy="12" r="9" />
  <path d="M12 12l5 7.5" />
</svg>
));
