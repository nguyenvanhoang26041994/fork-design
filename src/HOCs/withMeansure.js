import React from 'react';
import ReactDOM from 'react-dom';
import ResizeObserver from 'resize-observer-polyfill';

const withMeansure = (InputComponent) => {
  class Meansure extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        meansure: {
          width: 0,
          height: 0,
        },
      };
    }

    componentDidMount() {
      this.node = ReactDOM.findDOMNode(this).firstElementChild;
      this.ro =  new ResizeObserver(([entry]) => this.setState({ meansure: {
        width: entry.target.offsetWidth,
        height: entry.target.offsetHeight,
      } }));
  
      if (this.node) {
        this.ro.observe(this.node);
      }
    }
  
    componentWillUnmount() {
      this.ro.disconnect(this.node);
    }
  
    render() {

      return (
        <InputComponent
          {...this.props}
          meansure={this.state.meansure}
        />
      );
    }
  }

  Meansure.displayName = `withMeansure(${InputComponent.displayName || InputComponent.name || 'Anonymous'})`;
  return Meansure;
};

export default withMeansure;
