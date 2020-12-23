import { Component } from 'react';
import { BrowserRouter, Link, Router, Redirect } from 'react-router-dom';
import logo from '../res/logo.jpg';
import './Home.css';
import 'mdbreact/dist/css/mdb.css';
import './DetailPage'

class Home extends Component {
  render() {
    return (
      <>
      <div class='Home'>
        <header className="Home-header">
          <img className="Logo" src={logo} />
        </header>
        <Link to="/detail"><button type="button" class="btn btn-primary"><h1>สมัครค่าย</h1></button></Link>
      </div>
      </>
    );
  }
}

export default Home;
