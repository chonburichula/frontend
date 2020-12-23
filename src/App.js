import './App.css';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

import { Component } from 'react';

import Home from './components/Home'
import Register from './components/RegisterPage'
import Success from './components/SuccessPage'
import Detail from './components/DetailPage'

import React from "react";




class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/register" component={Register} />
        <Route path="/success" component={Success}/>
      </div>
    );
  }
}

export default App;
