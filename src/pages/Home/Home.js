import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
// import querySting from "query-string";
import { fetchMsg } from '@/redux/actions/homeAction';
import api from '@/api';
import './home.less';


@connect(
  state => ({ home: state.home }),
  dispatch => bindActionCreators({ fetchMsg }, dispatch)
)
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick() {
    api.getHomeList({ name: 'shangyy' }).then((res) => {
      console.log('res', res);
    });
    // this.props.history.push('/main')
  }
  render() {
    console.log(document.documentElement.clientWidth);
    return (
      <div className="home-container">
        <h3>this is Home page</h3>
        <div onClick={this.handleClick.bind(this)}>to main</div>
        <MyEchart />
      </div>
    );
  }
}


export default withRouter(Home);
