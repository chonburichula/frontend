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
      <div class='Overall'>
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
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroupTel">
              <Form.Control placeholder="ex. 087-482-XXXX"/>
            </Form.Group>
            <br></br>
            <h6>LineID</h6>
            <Form.Group controlId="formGroupLineID">
              <Form.Control placeholder="ไลน์ไอดี..." />
            </Form.Group>
            <br></br>
            <h6>LineID</h6>
            <Form.Group controlId="formGroupFacebook">
              <Form.Control placeholder="เฟซบุ๊ก..." />
            </Form.Group>
            <br></br>
            <h6>ระดับชั้น</h6>
            <Form.Group controlId="formGroupGrade">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">เลือกระดับชั้น...</option>
                <option value="1">มัธยมศึกษาปีที่ 4</option>
                <option value="2">มัธยมศึกษาปีที่ 5</option>
                <option value="3">มัธยมศึกษาปีที่ 6</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>แผนการเรียน</h6>
            <Form.Group controlId="formGroupMajor">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">เลือกแผนการเรียน...</option>
                <option value="1">วิทย์ - คณิต</option>
                <option value="2">ศิลป์ - คำนวณ</option>
                <option value="3">ศิลป์ - ภาษา</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>โรงเรียน</h6>
            <Form.Group controlId="formGroupSchool">
              <Form.Control placeholder="ชื่อเต็มของโรงเรียน Ex.ชลราษฎรอำรุง " />
            </Form.Group>
            <br></br>
            <h6>โรคประจำตัว</h6>
            <Form.Group controlId="formGroupDisease">
              <Form.Control placeholder="โรคประจำตัว... " />
            </Form.Group>
            <br></br>
            <h6>ยาประจำตัว</h6>
            <Form.Group controlId="formGroupMeds">
              <Form.Control placeholder="ยาประจำตัว... " />
            </Form.Group>
            <br></br>
            <h6>ข้อจำกัดด้านอาหาร</h6>
            <Form.Group controlId="formGroupFoodie">
              <Form.Control placeholder="เช่น ไม่ทานเนื้อหมู ไม่ทานเผ็ด... " />
            </Form.Group>
            <br></br>
            <h6>ขนาดเสื้อ</h6>
            <Form.Group controlId="formGroupShirtSize">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">เลือกขนาดเสื้อ...</option>
                <option value="1">S (33")</option>
                <option value="2">M (36")</option>
                <option value="3">L (40")</option>
                <option value="4">XL (44")</option>
                <option value="5">XXL (48")</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>ชื่อ-สกุล ผู้ปกครอง</h6>
            <Form.Group controlId="formGroupParentName">
              <Form.Control placeholder="เช่น นายประหยัด จันทร์อังคารพุธ... " />
            </Form.Group> 
            <br></br>
            <h6>ผู้ปกครองเกี่ยวข้องเป็น</h6>
            <Form.Group controlId="formGroupParentPosition">
              <Form.Control placeholder="เช่น พ่อ หรือ ป้า หรือ ย่า หรือ ยาย... " />
            </Form.Group> 
            <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroupParentTel">
              <Form.Control placeholder="ex. 087-482-XXXX"/>
            </Form.Group>
            <br></br>
          </Form>
        </div>
        <div class='Question'>
          <h1>ช่วงน้องตอบคำถาม</h1>
          <hr></hr>
          <p>✎ ส่วนนี้เป็นส่วนที่เก็บคะแนนนะคะ คะแนนรวมทั้งหมดคือ 10 คะแนนค่ะ</p>
          <p>เนื่องจากเป็นคำถามปลายเปิด พี่ ๆ เปิดโอกาสให้น้อง ๆ แสดงความคิดเห็นได้อย่างเต็มที่เลยค่ะ ไม่มีคำตอบที่ผิด:-)</p>
          <p>เกณฑ์การให้คะแนนจะวัดจากความชัดเจนและความเป็นเหตุเป็นผลของคำตอบ หากน้องสามารถอธิบายคำตอบได้อย่างชัดเจนโดยที่คำตอบไม่ยาวเกินไป และทำให้พี่ ๆ เข้าใจสิ่งที่น้อง ๆ ต้องการจะสื่อได้ ก็รับคะแนนไปเลยค่าา ☼</p>
          <p>ข้อแนะนำในการตอบคำถาม:</p>
          <p>- ตอบให้ครบทุกคำถาม</p>
          <p>- คำตอบไม่ควรสั้นหรือยาวเกินไป</p>
          <p>- ควรใช้ภาษาที่กระชับและสื่อความได้ชัดเจน</p>
          <p>- หากน้องไม่รู้จะอธิบายยังไง การยกตัวอย่างสถานการณ์จะช่วยให้คำตอบของน้องชัดเจนขึ้นได้</p>
          <p>- คำตอบอยู่บนพื้นฐานของความจริงความเป็นเหตุและผล</p>
          <p>- ใช้ภาษาสุภาพและสะกดคำให้ถูกต้อง</p>
          <hr></hr>
          <Form>
          <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroupParentTel">
              <Form.Control placeholder="ex. 087-482-XXXX"/>
            </Form.Group>
            <br></br>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
