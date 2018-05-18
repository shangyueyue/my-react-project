import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
// import querySting from "query-string";
import {addTodo} from '@/redux/actions/homeAction';
import './home.css';
@connect(
  state => ({ home:state.home }),
  dispatch => bindActionCreators({ addTodo }, dispatch)
)
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  handleClick(){
    this.props.addTodo({age:15})
  //  this.props.history.push("/main")
  }  
  render() {
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