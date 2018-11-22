import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Questions from "./components/Questions"

let state = {
  questions: []
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <Questions questions={state.questions}/>
      </div>
    );
  }
}

export default App;
