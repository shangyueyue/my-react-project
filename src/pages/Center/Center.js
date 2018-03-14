import React from 'react';
import MyComponent from "../../components/MyComponent/MyComponent";

class Sider extends React.Component {
  render() {
    console.log(this.props.match);
    return (
	  <div className="container">
      <h3>my name is center</h3>
      <MyComponent></MyComponent>
    </div>
    );
  }
}

export default Sider;
