import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('BrandGoogleDrive', 'brand-google-drive', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 10l-6 10l-3 -5l6 -10z" />
  <path d="M9 15h12l-3 5h-12" />
  <path d="M15 15l-6 -10h6l6 10z" />
</svg>
));
