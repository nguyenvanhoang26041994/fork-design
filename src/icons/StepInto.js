import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('StepInto', 'step-into', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="15" />
  <line x1="16" y1="11" x2="12" y2="15" />
  <line x1="8" y1="11" x2="12" y2="15" />
  <circle cx="12" cy="20" r="1" />
</svg>
));
