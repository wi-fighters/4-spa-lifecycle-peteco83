import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import SearchResults from './SearchResults';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchTerm: "",
       lastSearchTerm: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      lastSearchTerm: this.state.searchTerm
    })
  }
  


  render() {
    return (
      <div className="container">
        <Header/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
          <button type="submit">Search</button>
        </form>
        <SearchResults searchFor={this.state.lastSearchTerm}/>
      </div>
    );
  }
}

export default App;
