import React from 'react';
import propTypes from 'prop-types';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div />

    );
  }
}
MyComponent.defaultProps = {

};
MyComponent.propTypes = {
  name: propTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default MyComponent;
