import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('ReceiptTax', 'receipt-tax', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="14" x2="15" y2="8" />
  <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
</svg>
));
