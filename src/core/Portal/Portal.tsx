import React from 'react';
import ReactDOM from 'react-dom';

import { rootPortal } from './register';

class Portal extends React.Component<{
  children?: React.ReactNode,
  node: HTMLElement,
}> {
  displayName = 'Portal';
  defaultProps = { node: rootPortal };
  render() {
    if (typeof window === 'undefined') {
      return null;
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node,
    );
  }
}

export default Portal;
