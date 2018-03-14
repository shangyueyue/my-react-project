import React from 'react';

class Sider extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }

  }
  //解构赋值
  test(){
    console.log(this)
  }
  
  render() {
    return (
	  <div className="container">
      <div>
      {this.test()}
      </div>
    </div>
    );
  }
}

export default Sider;
