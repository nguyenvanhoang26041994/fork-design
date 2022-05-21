import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { rootPortal } from './register';

class Portal extends React.Component {
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

Portal.displayName = 'Portal';
Portal.propTypes = {
  children: PropTypes.any,
  node: PropTypes.any,
};
Portal.defaultProps = {
  node: rootPortal,
};

export default Portal;
