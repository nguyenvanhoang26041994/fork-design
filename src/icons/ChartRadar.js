import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ChartRadar', 'chart-radar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" />
  <path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" />
  <path d="M2.5 10l9.5 3l9.5 -3" />
  <path d="M12 3v10l6 8" />
  <path d="M6 21l6 -8" />
</svg>
));
