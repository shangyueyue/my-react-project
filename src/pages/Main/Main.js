import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchMainList } from '@/redux/actions/mainAction';
import './main.css';

@connect(
  state => ({ main: state.main }),
  dispatch => bindActionCreators({ fetchMainList }, dispatch)
)
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick(){
    this.props.fetchMainList({ index: 1 });
  }
  render() {
    console.log('main', this.props.main);
    return (
      <div className="main-container">
        <h3 onClick={this.handleClick.bind(this)}>this is main page</h3>
        <Link to="mine/shangyy?t=name"> mine</Link>
      </div>
    );
  }
}

export default Main;
