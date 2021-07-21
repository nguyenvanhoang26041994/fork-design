import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';
import PureConfirm from '../PureConfirm';

class Popconfirm extends React.Component {
  constructor(props) {
    super(props);
    this.onNo = this.onNo.bind(this);
    this.onYes = this.onYes.bind(this);
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  onNo() {
    this.node._tippy.hide();
    this.props.onNo();
  }

  onYes() {
    this.node._tippy.hide();
    this.props.onYes();
  }

  render() {
    const { overlay, className, noText, yesText, ...otherProps } = this.props;
    return (
      <Overlay
        className={cn('fpopconfirm', className)}
        content={(
          <PureConfirm
            onNo={this.onNo}
            onYes={this.onYes}
            noText={noText}
            yesText={yesText}
          >
            {overlay}
          </PureConfirm>
        )}
        role="popconfirm"
        {...otherProps}
      />
    );
  }
}

Popconfirm.displayName = 'Popconfirm';
Popconfirm.propTypes = {
  className: PropTypes.string,
  onNo: PropTypes.func,
  onYes: PropTypes.func,
};
Popconfirm.defaultProps = {
  trigger: 'click',
  hideOnClick: true,
  arrow: true,
  maxWidth: 'none',
  onNo: f => f,
  onYes: f => f,
};

export default Popconfirm;
