import { useRef } from 'react';

export default (parentRef) => parentRef || useRef();
