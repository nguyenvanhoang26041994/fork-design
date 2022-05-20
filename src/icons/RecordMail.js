import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('RecordMail', 'record-mail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="12" r="3" />
  <circle cx="17" cy="12" r="3" />
  <line x1="7" y1="15" x2="17" y2="15" />
</svg>
));
