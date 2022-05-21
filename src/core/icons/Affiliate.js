import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Affiliate', 'affiliate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
  <path d="M11.683 12.317l5.759 -5.759" />
  <circle cx="5.5" cy="5.5" r="1.5" />
  <circle cx="18.5" cy="5.5" r="1.5" />
  <circle cx="18.5" cy="18.5" r="1.5" />
  <circle cx="8.5" cy="15.5" r="4.5" />
</svg>
));
