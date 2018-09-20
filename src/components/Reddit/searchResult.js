import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    this.props.topicData.forEach((topic) => {
      console.log(topic.url, topic.title);
    });
    console.log(this.props.topicData);

    /*
    if (this.props.topicData.length === 0) {
      return <div>empty</div>:
    }
    */

    /* Illegal!
    this.props.topicData.length ?
      return ... :
      return ...
    */

    return (
      this.props.topicData.length !== 0 ?
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
        </div> :
        <div className='empty'>
        EMPTY
        </div>
    );
  }
}