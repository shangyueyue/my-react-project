import React from 'react';
import {Link} from 'react-router-dom';
import './main.css';

class Main extends React.Component {
  render() {
    return (
	 <div className="main-container">
    <h3>this is main page</h3>
    <Link to="mine/shangyy?t=name"> mine</Link>  
     </div>
    );
  }
}

export default Main;
