import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Aperture', 'aperture', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
</svg>
));
