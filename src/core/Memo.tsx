import React from 'react';
import ReactDOM from 'react-dom';

export default class Memo extends React.Component<{
  fresh?: boolean,
  watch?: boolean,
  children?: any,
}> {
  memo: any;
  childrenNode: any;
  displayName = 'Memo';
  defaultProps = {};

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
};
