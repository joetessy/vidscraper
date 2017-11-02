import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  handleInputChange(term){
    this.setState({term});
    this.props.onSeachTermChange(term);
  }
  render(){
    return <input
      value={this.state.term}
      onChange={event => this.handleInputChange(event.target.value)}></input>;
  }
}
