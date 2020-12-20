import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Component } from 'react';
import './RegisterPage.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from 'react-bootstrap';
import DatePicker from './DatePicker'
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component {
  render() {
    return (
      <div class='PersonalInfo'>
        <h1>ข้อมูลส่วนตัว</h1>
        <hr></hr>
        <Form class>
          <Row>
            <Form.Group as={Col} controlId="formGroupEmail">
              <Form.Control type="email" placeholder="กรอกอีเมล์ ex. name@gmail.com" />
            </Form.Group>
          </Row>
          <br></br>
          <Row>
            <Form.Group as={Col} controlId="formGroupTitleName">
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
            </Form.Group>
            <Form.Group as={Col} controlId="formGroupFirstName">
              <Form.Control placeholder="ชื่อจริง..." />
            </Form.Group>
            <Form.Group as={Col} controlId="formGroupLastName">
              <Form.Control placeholder="นามสกุล..."/>
            </Form.Group>
          </Row>
          <br></br>
          <Row>
            <Form.Group as={Col} controlId="formGroupNickName">
              <Form.Control placeholder="ชื่อเล่น..." />
            </Form.Group>
            <DatePicker/>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Register;
