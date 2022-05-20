import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('MathSymbols', 'math-symbols', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="12" y1="3" x2="12" y2="21" />
  <line x1="16.5" y1="4.5" x2="19.5" y2="7.5" />
  <line x1="19.5" y1="4.5" x2="16.5" y2="7.5" />
  <line x1="6" y1="4" x2="6" y2="8" />
  <line x1="4" y1="6" x2="8" y2="6" />
  <line x1="18" y1="16" x2="18.01" y2="16" />
  <line x1="18" y1="20" x2="18.01" y2="20" />
  <line x1="4" y1="18" x2="8" y2="18" />
</svg>
));
