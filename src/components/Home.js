import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../res/logo.jpg';
import './Home.css';
// import 'mdbreact/dist/css/mdb.css';
import './DetailPage'
import { SocialIcon } from 'react-social-icons';

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
      <div class='Icons'>
        <div id="icon">
          <SocialIcon url="https://www.facebook.com/chulachon40" /> 
          <span>  Facebook</span>
        </div>
        <div id="icon">
          <SocialIcon url="https://www.instagram.com/chulachon.official/" />
          <span>  Instagram</span>
        </div>
      </div>
      </>
    );
  }
}

export default Home;
