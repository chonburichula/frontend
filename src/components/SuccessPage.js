import { Component } from 'react';
import './SuccessPage.css';
import { BrowserRouter, Link, Router, Redirect } from 'react-router-dom';

class Success extends Component {
    render() {
      return (
        <>
        <div className="SuccessInfo">
          <p>Success!!!!</p>
          <Link to="/">
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