import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('CalendarTime', 'calendar-time', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <circle cx="18" cy="18" r="4" />
  <path d="M15 3v4" />
  <path d="M7 3v4" />
  <path d="M3 11h16" />
  <path d="M18 16.496v1.504l1 1" />
</svg>
));
