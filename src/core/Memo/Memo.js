import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Memo extends React.Component {
  componentDidMount() {
    if (this.props.fresh) {
      return;
    }

    if (this.props.watch) {
      this.memo = true;
      this.childrenNode = ReactDOM.findDOMNode(this);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if (this.props.fresh) {
      return;
    }

    if (this.props.watch) {
      this.memo = true;
      this.childrenNode = this.childrenNode || ReactDOM.findDOMNode(this);

      this.childrenNode.style.display = null;
    } else if (this.childrenNode) {
      this.childrenNode.style.display = 'none';
    }
  }

  render() {
    const { fresh, children } = this.props;
  
    if (fresh) {
      if (this.props.watch) {
        return children || <div />;
      }
      return <div />;
    }

    if (this.props.watch || this.memo) {
      return children || <div />;
    }

    return <div />;
  }
}

Memo.displayName = 'Memo';
Memo.propTypes = {
  watch: PropTypes.bool,
  fresh: PropTypes.bool,
};
Memo.defaultProps = {};
