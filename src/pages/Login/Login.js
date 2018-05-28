import React from 'react';
// import queryString from 'query-string';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // 解构赋值
  handleLogin() {
    // const { search } = this.props.location;
    // const { pathname, ...parsed } = queryString.parse(search);
    // const query = queryString.stringify(parsed);
    // this.props.history.push(`${pathname}?${query}`);
  }

  render() {
    return (
      <div className="container">
        <div onClick={this.handleLogin.bind(this)}>
           this is Login pages
        </div>
      </div>
    );
  }
}

export default Login;

