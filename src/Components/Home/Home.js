import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    <div>
  
  <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a>
      </div>
    );
  }
}

export default App;
