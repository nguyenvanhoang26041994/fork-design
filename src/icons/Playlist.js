import React from 'react';
import withIconEnhancer from './HOCs/withIconEnhancer';

export default withIconEnhancer('Playlist', 'playlist', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="14" cy="17" r="3" />
  <path d="M17 17v-13h4" />
  <path d="M13 5h-10" />
  <line x1="3" y1="9" x2="13" y2="9" />
  <path d="M9 13h-6" />
</svg>
));
