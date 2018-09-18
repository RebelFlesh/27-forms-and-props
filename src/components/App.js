import React, { Component } from 'react';
import './App.css';

import superagent from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  componentDidMount(){
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
