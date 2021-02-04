import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import PerfectEgroApp from './components/PerfectEgroApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <PerfectEgroApp/>
      </div>
    );
  }
}
export default App;
