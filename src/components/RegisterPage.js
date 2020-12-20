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
          <h6>Email Address</h6>
          <Form.Group  controlId="formGroupEmail">
            <Form.Control type="email" placeholder="กรอกอีเมล์ ex. name@gmail.com" />
          </Form.Group>
          <br></br>
          <h6>คำนำหน้าชื่อ</h6>
          <Form.Group  controlId="formGroupTitleName">
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
              <option value="4">นางสาว</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <h6>ชื่อ</h6>
          <Form.Group controlId="formGroupFirstName">
            <Form.Control placeholder="ชื่อจริง..." />
          </Form.Group>
          <br></br>
          <h6>นามสกุล</h6>
          <Form.Group controlId="formGroupLastName">
            <Form.Control placeholder="นามสกุล..."/>
          </Form.Group>
          <br></br>
          <h6>ชื่อเล่น</h6>
          <Form.Group controlId="formGroupNickName">
            <Form.Control placeholder="ชื่อเล่น..." />
          </Form.Group>
          <br></br>
          <DatePicker/>
          <br></br>
          <h6>หมู่โลหิต</h6>
          <Form.Group controlId="formGroupBloodType">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">เลือกหมู่โลหิต...</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">O</option>
              <option value="4">AB</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <h6>ศาสนา</h6>
          <Form.Group controlId="formGroupReligion">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">เลือกศาสนา...</option>
              <option value="1">พุทธ</option>
              <option value="2">คริสต์</option>
              <option value="3">อิสลาม</option>
              <option value="4">พราหมณ์-ฮินดู</option>
              <option value="5">ซิกข์</option>
              <option value="6">อื่นๆ...</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <h6>ที่อยู่</h6>
          <Form.Group controlId="formGroupAddress">
            <Form.Control placeholder="ที่อยู่... ex. 99 หมู่ 9 ต.หมอนนาง อ.พนัสนิคม จ.ชลบุรี" />
          </Form.Group>
          <br></br>
        </Form>
      </div>
    );
  }
}

export default Register;
