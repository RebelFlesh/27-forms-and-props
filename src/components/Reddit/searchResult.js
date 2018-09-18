import React from 'react';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.topicData.map((topic) => {
      console.log(topic.url, topic.title);
    });
    console.log(this.props.topicData);
    return (
      this.props.topicData.length !==0 ?
      <div className='searchResults'>
        {
          this.props.topicData.map((topic, i) => 
            <div key={i}>
              <a href={topic.data.url}>{topic.data.title}
                <p>{topic.data.ups}</p>
              </a>
            </div>
          )
        }
      </div>:
      <div className='empty'>
        EMPTY
      </div>
    );
  }
}