import React, { Component } from 'react';
import './App.css';

import superagent from 'superagent';

// const redditAPI = 'https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
    this.changeTopic = this.changeTopic.bind(this);
    this.fetchData = this.fetchData.bind(this); 
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  componentDidMount(){
    console.log('__STATE__', this.state);
  }

  async changeTopic(event){ 
    // let url = event.target.value
  }

  fetchData(url){
    return superagent.get(url)
      .then(result => {
        return result.body;
      })
      .catch(console.error);
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
