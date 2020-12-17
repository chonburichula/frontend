import logo from './res/logo.jpg';
import './App.css';

import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Component } from 'react';

import Home from './components/Home'
import Register from './components/RegisterPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/register">register</Link>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </header>
      </div>
    );
  }
}

export default App;
