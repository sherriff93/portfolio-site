import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Home.css';

class Home extends Component {
  render() {
    console.log('home rerender')
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Word App</h2>
        </div>
        <p className="App-intro">
          Your own personal dictionary.
        </p>
        {/*<DictionaryList />*/}
      </div>
    )
  }
}

export default Home
