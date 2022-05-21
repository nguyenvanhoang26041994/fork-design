import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('TemperatureFahrenheit', 'temperature-fahrenheit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="8" r="2" />
  <line x1="13" y1="12" x2="18" y2="12" />
  <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
</svg>
));
