import React, { Component } from 'react';
import './App.css';
import SearchForm from './Reddit/searchForm';
import SearchResults from './Reddit/searchResult';

import superagent from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  componentDidMount(){
    console.log('__STATE__', this.state);
  }

  handleSubmit(event){ 
    event.preventDefault();
    let searchFormBoard = event.target.text.value;
    let searchFormLimit = event.target.number.value;
    let url = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
    this.changeTopic(url);
  }

  async changeTopic(url) {
    const searchResultData = await this.fetchData(url);
    this.setState({
      topics: searchResultData.data.children,
    });
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
        <SearchForm search={this.handleSubmit}/>
        <SearchResults topicData={this.state.topics}/>
      </div>
    );
  }
}

export default App;
