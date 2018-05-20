import React from 'react';
import { Link } from 'react-router-dom';
import './mine.css';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <h3>this is mine page</h3>
        <Link to="/home/center?name=shangyy" replace>to home</Link>
      </div>
    );
  }
}

export default Main;
