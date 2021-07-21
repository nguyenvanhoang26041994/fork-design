import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('GitFork', 'git-fork', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="6" r="2" />
  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
  <line x1="12" y1="12" x2="12" y2="16" />
</svg>
));
