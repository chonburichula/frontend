import { Component } from 'react';
import { BrowserRouter, Link, Router, Redirect } from 'react-router-dom';
import logo from '../res/logo.jpg';
import './Home.css';
import 'mdbreact/dist/css/mdb.css';
import './DetailPage'
import { MDBIcon, MDBContainer } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <>
      <div class='Home'>
        <header className="Home-header">
          <img className="Logo" src={logo} />
        </header>
        <Link to="/detail">
          <button type="button" class="btn btn-primary">
            <h3>สมัครค่าย</h3>
          </button>
        </Link>
      </div>
      <MDBContainer>
          <a href="#!" className="fb-ic mr-3">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="#!" className="tw-ic mr-3">
            <MDBIcon fab icon="twitter" />
          </a>
        </MDBContainer>
      </>
    );
  }
}

export default Home;
