import { Component } from 'react';
import './SuccessPage.css';
import { Link } from 'react-router-dom';
import thank from '../res/thank.png';

class Success extends Component {
    render() {
      return (
        <>
        <div className="SuccessInfo">
          <img className="Thank" src={thank} />
          <Link to="/">
          <br />
          <br />
          <button type="button" class="btn btn-primary">
            <h3>กลับสู่หน้าหลัก</h3>
          </button>
          </Link>
        </div>
        </>
      );
    }
  }
  
  export default Success;