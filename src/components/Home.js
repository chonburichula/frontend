import { Component } from 'react';
import { BrowserRouter, Link, Router, Redirect } from 'react-router-dom';
import logo from '../res/logo.jpg';
import './Home.css';
import 'mdbreact/dist/css/mdb.css';

class Home extends Component {
  render() {
    return (
      <>
      <div>
        <header className="Home-header">
          <img className="Logo" src={logo} />
        </header>
        <Link to="/register"><button type="button" class="btn btn-primary">Register</button></Link>
      </div>
      </>
    );
  }
}

export default Home;
