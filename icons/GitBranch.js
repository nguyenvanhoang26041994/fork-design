import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('GitBranch', 'git-branch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="6" r="2" />
  <line x1="7" y1="8" x2="7" y2="16" />
  <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
  <polyline points="14 14 17 11 20 14" />
</svg>
));
