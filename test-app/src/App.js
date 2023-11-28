import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  render() {
    const style = {
      backgroundColor : 'black'
    }
    return (
    	<><h1 style={style}>Hello World!</h1>
        <Test /></>
    );
  }
}

export default App;