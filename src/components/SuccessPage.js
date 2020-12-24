import { Component } from 'react';
import './SuccessPage.css';
import { Link } from 'react-router-dom';
import thank from '../res/thank.png';

class Success extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  

  render() {
    return (
        <div className="SuccessInfo">
          <img className="Thank" src={thank} />
          <br />
          <br />
          <p>รอโหลดรูปแปปนึงน้าา...🕔</p>
          <Link to="/">
            <button type="button" class="btn btn-primary">
              <h3>กลับสู่หน้าหลัก</h3>
            </button>
          </Link>
        </div>
       );
    }
}
  
  
  
  export default Success;