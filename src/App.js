import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter 
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     

<BrowserRouter
basename="/">
<div className="App">
        <p>Hello Bus Tracker</p>
      </div>
</BrowserRouter>
    );
  }
}

export default App;
