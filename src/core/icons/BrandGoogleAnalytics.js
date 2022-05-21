import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandGoogleAnalytics', 'brand-google-analytics', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="10" y="9" width="4" height="12" rx="1.105" />
  <rect x="17" y="3" width="4" height="18" rx="1.105" />
  <circle cx="5" cy="19" r="2" />
</svg>
));
