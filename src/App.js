import './App.css';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

import { Component } from 'react';

import Home from './components/Home'
import Register from './components/RegisterPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
