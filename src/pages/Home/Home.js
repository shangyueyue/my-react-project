import React from 'react';
import {withRouter} from 'react-router-dom';
import querySting from "query-string";
import './home.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  handleClick(){
   this.props.history.push("/main")
  }  
  render() {
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);
    console.log(querySting.parse(this.props.location.search))
    return (
	 <div className="home-container">
      <h3>this is Home page</h3>
      <div onClick={this.handleClick.bind(this)}>to main</div>
      <div>{this.props.children}</div>
   </div>
    );
  }
}

export default withRouter(Home);
