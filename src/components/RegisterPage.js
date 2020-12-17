import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Component } from 'react';
import './RegisterPage.css'

class Register extends Component {
  render() {
    return (
      <form>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example1" class="form-control" />
              <label class="form-label" for="form3Example1">First name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example2" class="form-control" />
              <label class="form-label" for="form3Example2">Last name</label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
