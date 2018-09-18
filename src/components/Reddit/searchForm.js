import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.search}>
          <input name='text' type='text' placeholder='Search Articles'/>
          <input name='number' type='number' defaultValue='1' min='0' max='100'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}