import './App.css';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

import { Component } from 'react';

import Home from './components/Home'
import Register from './components/RegisterPage'
import Success from './components/SuccessPage'

import React from "react";

import Global from "./styles/global";

/*import Home from "./pages/Home/Home";*/


class App extends Component {
  componrntWillMount(){
    document.title = 'ChulaChon 42nd'
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/success" component={Success}/>
      </div>
    );
  }
}

export default App;
