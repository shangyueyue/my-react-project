import React from "react";
import propTypes from "prop-types";

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
      <h3>{this.props.children}</h3>
      <div>{this.props.name}</div>
      </div>

    )
  }
}
MyComponent.defaultProps={
  name:"shangyy"
}
MyComponent.propTypes={
  name:propTypes.any.isRequired
}

export default MyComponent;