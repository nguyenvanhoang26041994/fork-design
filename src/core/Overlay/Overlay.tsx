import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';

const Overlay = (props: TippyProps): any => <Tippy {...props}/>;

Overlay.displayName = 'Overlay';
Overlay.defaultProps = {
  popperOptions: {
    strategy: 'fixed',
  },
  animation: 'fade',
  interactive: true,
  placement: 'top',
  sticky: false,
};

export default Overlay;
