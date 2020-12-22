import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { Component } from 'react';
import './RegisterPage.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from 'react-bootstrap';
import DatePicker from './DatePicker'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class Register extends Component {
  state = {
    ID: null,
    Email: null,
    Title: null,
    Name: null,
    Surname: null,
    Nickname: null,
    Birthdate: null,
    Age: null,
    BloodType: null,
    Religion: null,
    Address: null,
    PhoneNumber: null,
    LineID: null,
    Facebook: null,
    Class: null,
    Major: null,
    School: null,
    Disease: null,
    Medicine: null,
    FoodLimitation: null,
    ClothSize: null,
    FatherName: null,
    FatherPhoneNumber: null,
    MotherName: null,
    MotherPhoneNumber: null,
    ParentName: null,
    ParentType: null,
    ParentPhoneNumber: null,
    //GradingAnswer1: null,
    //GradingAnswer2: null,
    //GradingAnswer3: null,
    Answer1: null,
    Answer2: null,
    Answer3: null,
    Answer4: null,
    Answer5: null,
    Answer6: null,
    Answer7: null,
    Status: null,
    Score: null,
    loading: false,
    status: null
}

onRequest = () => {
    console.log(this.state)
    axios.post('http://localhost:8080/register', {
      ID: this.state.ID,
      Email: this.state.Email,
      Title: this.state.Title,
      Name: this.state.Name,
      Surname: this.state.Surname,
      Nickname: this.state.Nickname,
      Birthdate: this.state.Birthdate,
      Age: this.state.Age,
      BloodType: this.state.BloodType,
      Religion: this.state.Religion,
      Address: this.state.Address,
      PhoneNumber: this.state.PhoneNumber,
      LineID: this.state.LineID,
      Facebook: this.state.Facebook,
      Class: this.state.Class,
      Major: this.state.Major,
      School: this.state.School,
      Disease: this.state.Disease,
      Medicine: this.state.Medicine,
      FoodLimitation: this.state.FoodLimitation,
      ClothSize: this.state.ClothSize,
      FatherName: this.state.FatherName,
      FatherPhoneNumber: this.state.FatherPhoneNumber,
      MotherName: this.state.MotherName,
      MotherPhoneNumber: this.state.MotherPhoneNumber,
      ParentName: this.state.ParentName,
      ParentType: this.state.ParentType,
      ParentPhoneNumber: this.state.ParentPhoneNumber,
      //GradingAnswer1: this.state.GradingAnswer1,
      //GradingAnswer2: this.state.GradingAnswer2,
      //GradingAnswer3: this.state.GradingAnswer3,
      Answer1: this.state.Answer1,
      Answer2: this.state.Answer2,
      Answer3: this.state.Answer3,
      Answer4: this.state.Answer4,
      Answer5: this.state.Answer5,
      Answer6: this.state.Answer6,
      Answer7: this.state.Answer7,
      Status: this.state.Status,
      Score: this.state.Score,
    })
    .then((response) => {
        this.setState({ loading: false })
        console.log(response.data.status);
        this.setState({status:response.data.status})
    }, (error) => {
        console.log(error);
    });
  } 
  
  render() {
    return (
      <div class='Overall'>
        <div class='PersonalInfo'>
          <h1 class='Header'>ข้อมูลส่วนตัว</h1>
          <hr class='Header'></hr>
          <Form class>
            <h6>Email Address</h6>
            <Form.Group  controlId="formGroup">
              <Form.Control type="email" placeholder="กรอกอีเมล์ ex. name@gmail.com" onChagne/>
            </Form.Group>
            <br></br>
            <h6>คำนำหน้าชื่อ</h6>
            <Form.Group  controlId="formGroup">
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
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ชื่อจริง..." />
            </Form.Group>
            <br></br>
            <h6>นามสกุล</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="นามสกุล..."/>
            </Form.Group>
            <br></br>
            <h6>ชื่อเล่น</h6>
            <Form.Group controlId="formGroup">
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
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            </div>
            <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ex. 087-482-XXXX"/>
            </Form.Group>
            <br></br>
            <h6>LineID</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ไลน์ไอดี..." />
            </Form.Group>
            <br></br>
            <h6>LineID</h6>
            <Form.Group controlId="formGroup">
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
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ชื่อเต็มของโรงเรียน Ex.ชลราษฎรอำรุง " />
            </Form.Group>
            <br></br>
            <h6>โรคประจำตัว</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="โรคประจำตัว... " />
            </Form.Group>
            <br></br>
            <h6>ยาประจำตัว</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ยาประจำตัว... " />
            </Form.Group>
            <br></br>
            <h6>ข้อจำกัดด้านอาหาร</h6>
            <Form.Group controlId="formGroup">
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
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เช่น นายประหยัด จันทร์อังคารพุธ... " />
            </Form.Group> 
            <br></br>
            <h6>ผู้ปกครองเกี่ยวข้องเป็น</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เช่น พ่อ หรือ ป้า หรือ ย่า หรือ ยาย... " />
            </Form.Group> 
            <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ex. 087-482-XXXX"/>
            </Form.Group>
            <br></br>
          </Form>
        </div>
        <div class='Question'>
          <h1 class='Header'>ช่วงน้องตอบคำถาม</h1>
          <hr class='Header'></hr>
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
          <hr class='Header'></hr>
          <Form>
          <br></br>
            <h6>คำถามข้อที่ 1</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <br></br>
            <h6>คำถามข้อที่ 2</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control"  rows="4"></textarea>
            </div>
            <br></br>
            <h6>คำถามข้อที่ 3</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control"  rows="4"></textarea>
            </div>
            <br></br>
          </Form>
        </div>
        <div class='Talking'>
          <h1 class='Header'>ช่วงพี่อยากคุยด้วย</h1>
          <hr class='Header'></hr>
          <p>☕︎ ผ่านส่วนที่เครียดมาแล้ว มาผ่อนคลายสมองกันก่อนจบการสมัครดีกว่าค่ะ ส่วนนี้ไม่เก็บคะแนนนะคะ เขียนได้เต็มที่เล้ย~</p>
          <hr class='Header'></hr>
          <br></br>
          <h6>น้องรู้จักโครงการนี้ได้อย่างไร</h6>
          <Form.Group id="formGroup">
            <Form.Control placeholder="..." />
          </Form.Group> 
          <br></br>
          <h6>น้องๆเคยเข้าร่วมโครงค่ายจุฬาฯ - ชลบุรีมาก่อนหรือไม่</h6>
          <Form.Group controlId="formT2">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">เลือก...</option>
              <option value="1">เคย</option>
              <option value="2">ไม่เคย</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <h6>คณะที่น้องอยากเข้ามากที่สุดพร้อมเหตุผล</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT3" rows="4"></textarea>
            </div>
          <br></br>
          <h6>มุมมองของน้องที่มีต่อจุฬาลงกรณ์มหาวิทยาลัย</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT4" rows="4"></textarea>
            </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Register;
