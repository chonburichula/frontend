import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Component } from 'react';
import './RegisterPage.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from 'react-bootstrap';

class Register extends Component {
  render() {
    return (
      <div class='PersonalInfo'>
        <h1>ข้อมูลส่วนตัว</h1>
        <hr></hr>
        <Form class='form1'>
          <Form.Row>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@gmail.com" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Col>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">เลือกคำนำหน้าชื่อ..</option>
              <option value="1">เด็กชาย</option>
              <option value="2">เด็กหญิง</option>
              <option value="3">นาย</option>
              <option value="3">นางสาว</option>
            </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
            <Col>
            <Form.Control placeholder="Nick name" />
            </Col>
          </Form.Row>
        </Form>
      </div>
      
      
      
    );
  }
}

export default Register;
