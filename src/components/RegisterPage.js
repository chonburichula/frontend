import { Component } from 'react';
import './RegisterPage.css'
import { Form, Button, FormGroup, FormControl, ControlLabel, Spinner } from "react-bootstrap";
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Link, Router, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    GradingAnswer1: null,
    GradingAnswer2: null,
    GradingAnswer3: null,
    Answer1: null,
    Answer2: null,
    Answer3: null,
    Answer4: null,
    Answer5: null,
    Answer6: null,
    Answer7: null,
    Score: null,
    errors: null
}

componentDidMount() {
  window.scrollTo(0, 0);
}

onRequest = () => {
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors', 
      body: JSON.stringify({
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
          GradingAnswer1: this.state.GradingAnswer1,
          GradingAnswer2: this.state.GradingAnswer2,
          GradingAnswer3: this.state.GradingAnswer3,
          Answer1: this.state.Answer1,
          Answer2: this.state.Answer2,
          Answer3: this.state.Answer3,
          Answer4: this.state.Answer4,
          Answer5: this.state.Answer5,
          Answer6: this.state.Answer6,
          Answer7: this.state.Answer7,
          Status: this.state.Status,
          Score: this.state.Score
        })
    };
    fetch('http://34.126.69.10:8080/register', requestOptions);
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.handleValidation()){
      this.onRequest();
      alert("สมัครสมาชิกสำเร็จ");
    } else {
      let text="กรุณากรอกข้อมูลให้ครบถ้วน \n\nรายการที่ไม่สมบูรณ์: \n";
      for (var key in this.state.errors) {
        text+=key+"\n";
      }
      text+="\nสมัครไม่สำเร็จ"
      alert(text);
    }
  }
  
  handleValidation(){
    let errors = {};
    let formIsValid = true;

    //Name
    if(this.state.Name === null){
       formIsValid = false;
       errors["ชื่อจริง"] = "กรุณากรอกชื่อจริง";
    }
    //Title
    if(this.state.Title === '0'){
      formIsValid = false;
      errors["คำนำหน้าชื่อ"] = "กรุณาเลือกคำนำหน้าชื่อ";
    }
    //Surname
    if(this.state.Surname === null){
      formIsValid = false;
      errors["นามสกุล"] = "กรุณากรอกนามสกุล";
    }
    //Nickname
    if(this.state.Nickname === null){
      formIsValid = false;
      errors["ชื่อเล่น"] = "กรุณากรอกชื่อเล่น";
    }
    //Nickname
    if(this.state.Birthdate === null){
      formIsValid = false;
      errors["วันเกิด"] = "กรุณาเลือกวันเกิด";
    }
    //BloodType
    if(this.state.BloodType === '0'){
      formIsValid = false;
      errors["หมู่โลหิต"] = "กรุณากรเลือกหมู่โลหิต";   
    }

    //Religion
    if(this.state.Religion === '0'){
      formIsValid = false;
      errors["ศาสนา"] = "กรุณาเลือกศาสนา";
    }

    //Address }
    if(this.state.Address === null){
      formIsValid = false;
      errors["ที่อยู่"] = "กรุณากรอกที่อยู่";
    }
    
    //PhoneNumber
    if(this.state.PhoneNumber === null){
      formIsValid = false;
      errors["เบอร์โทรศัพท์"] = "กรุณากรอกเบอร์โทรศัพท์";
    }

    //LineID
    if(this.state.LineID === null){
      formIsValid = false;
      errors["ไลน์ไอดี"] = "กรุณากรอกไลน์ไอดี";
    }

    //Facebook
    if(this.state.Facebook === null){
      formIsValid = false;
      errors["เฟซบุ๊ก"] = "กรุณากรอกเฟซบุ๊ก";
    }

    //Class
    if(this.state.Class === '0'){
      formIsValid = false;
      errors["ชั้นปี"] = "กรุณาเลือกชั้นปี";
    }

    //Major
    if(this.state.Major === '0'){
      formIsValid = false;
      errors["แผนการเรียน"] = "กรุณาเลือกแผนการเรียน";
    }

    //School
    if(this.state.School === null){
      formIsValid = false;
      errors["โรงเรียน"] = "กรุณากรอกโรงเรียน";
    }

    //ClothSize
    if(this.state.ClothSize === '0'){
      formIsValid = false;
      errors["ไซส์เสื้อ"] = "กรุณาเลือกไซส์เสื้อ";
    }

    //ParentName
    if(this.state.ParentName === null){
      formIsValid = false;
      errors["ชื่อผู้ปกครอง"] = "กรุณากรอกชื่อผู้ปกครอง";
    }

    //ParentType
    if(this.state.ParentType === null){
      formIsValid = false;
      errors["ประเภทของผู้ปกครอง"] = "";
    }
    //ParentPhoneNumber
    if(this.state.ParentPhoneNumber === null){
      formIsValid = false;
      errors["เบอร์โทรศัพท์ผู้ปกครอง"] = "";
    }
    //ParentPhoneNumber
    if(this.state.ParentPhoneNumber === null){
      formIsValid = false;
      errors["เบอร์โทรศัพท์ผู้ปกครอง"] = "";
    }

    //GradingAnswer1
    if(this.state.GradingAnswer1=== null){
      formIsValid = false;
      errors["คำถามข้อที่ึ 1"] = "";
    }

    //GradingAnswer2
    if(this.state.GradingAnswer2=== null){
      formIsValid = false;
      errors["คำถามข้อที่ึ 2"] = "";
    }

    //GradingAnswer3
    if(this.state.GradingAnswer3=== null){
      formIsValid = false;
      errors["คำถามข้อที่ึ 3"] = "";
    }
    
    // //Answer1
    // if(this.state.Answer1=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 1"] = "";
    // }

    // //Answer2
    // if(this.state.Answer2=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 2"] = "";
    // }

    // //Answer3
    // if(this.state.Answer3=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 3"] = "";
    // }
    
    // //Answer4
    // if(this.state.Answer4=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 4"] = "";
    // }
    
    // //Answer5
    // if(this.state.Answer5=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 5"] = "";
    // }
    
    // //Answer6
    // if(this.state.Answer6=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 6"] = "";
    // }
    
    // //Answer7
    // if(this.state.Answer7=== null){
    //   formIsValid = false;
    //   errors["คำถามข้อที่ึ 7"] = "";
    // }

    this.state.errors = errors;
    return formIsValid;
  }

  render() {
    return (
      <>
      <div class='Overall'>
        <div class='PersonalInfo'>
          <h1 class='Header'>ข้อมูลส่วนตัว</h1>
          <hr class='Header'></hr>
          <Form class>
            <h6>Email Address</h6>
            <Form.Group  controlId="formGroup">
              <Form.Control type="email" placeholder="กรอกอีเมล์ ex. name@gmail.com" onChange={(e) => this.setState({ Email: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>คำนำหน้าชื่อ</h6>
            <Form.Group  controlId="formGroup">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                onChange={(e) => this.setState({ Title: e.target.value })}
              >
                <option value="0">เลือกคำนำหน้าชื่อ..</option>
                <option value="เด็กชาย">เด็กชาย</option>
                <option value="เด็กหญิง">เด็กหญิง</option>
                <option value="นาย">นาย</option>
                <option value="นางสาว">นางสาว</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>ชื่อ</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ชื่อจริง..." onChange={(e) => this.setState({ Name: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>นามสกุล</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="นามสกุล..." onChange={(e) => this.setState({ Surname: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>ชื่อเล่น</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ชื่อเล่น..." onChange={(e) => this.setState({ Nickname: e.target.value })}/>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formGroup">
              <Form.Label>เลือกวันเดือนปีเกิด...</Form.Label>
              <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={(e) => this.setState({ Birthdate: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>หมู่โลหิต</h6>
            <Form.Group controlId="formGroupBloodType">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                onChange={(e) => this.setState({ BloodType: e.target.value })}
              >
                <option value="0">เลือกหมู่โลหิต...</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
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
                onChange={(e) => this.setState({ Religion: e.target.value })}
              >
                <option value="0">เลือกศาสนา...</option>
                <option value="พุทธ">พุทธ</option>
                <option value="คริสต์">คริสต์</option>
                <option value="อิสลาม">อิสลาม</option>
                <option value="พราหมณ์-ฮินดู">พราหมณ์-ฮินดู</option>
                <option value="ซิกข์">ซิกข์</option>
                <option value="อื่นๆ...">อื่นๆ...</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>ที่อยู่</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="form4Example3" rows="4" onChange={(e) => this.setState({ Address: e.target.value })}></textarea>
            </div>
            <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ex. 087-482-XXXX" onChange={(e) => this.setState({ PhoneNumber: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>LineID</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ไลน์ไอดี..." onChange={(e) => this.setState({ LineID: e.target.value })} />
            </Form.Group>
            <br></br>
            <h6>Facebook</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เฟซบุ๊ก..." onChange={(e) => this.setState({ Facebook: e.target.value })} />
            </Form.Group>
            <br></br>
            <h6>ระดับชั้น</h6>
            <Form.Group controlId="formGroupGrade">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                onChange={(e) => this.setState({ Class: e.target.value })}
              >
                <option value="0">เลือกระดับชั้น...</option>
                <option value="4">มัธยมศึกษาปีที่ 4</option>
                <option value="5">มัธยมศึกษาปีที่ 5</option>
                <option value="6">มัธยมศึกษาปีที่ 6</option>
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
                onChange={(e) => this.setState({ Major: e.target.value })}
              >
                <option value="0">เลือกแผนการเรียน...</option>
                <option value="วิทย์ - คณิต">วิทย์ - คณิต</option>
                <option value="ศิลป์ - คำนวณ">ศิลป์ - คำนวณ</option>
                <option value="ศิลป์ - ภาษา">ศิลป์ - ภาษา</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>โรงเรียน</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ชื่อเต็มของโรงเรียน Ex.ชลราษฎรอำรุง " onChange={(e) => this.setState({ School: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>โรคประจำตัว</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="โรคประจำตัว... " onChange={(e) => this.setState({ Disease: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>ยาประจำตัว</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ยาประจำตัว... " onChange={(e) => this.setState({ Medicine: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>ข้อจำกัดด้านอาหาร</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เช่น ไม่ทานเนื้อหมู ไม่ทานเผ็ด... " onChange={(e) => this.setState({ FoodLimitation: e.target.value })}/>
            </Form.Group>
            <br></br>
            <h6>ขนาดเสื้อ</h6>
            <Form.Group controlId="formGroupShirtSize">
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                onChange={(e) => this.setState({ ClothSize: e.target.value })}
              >
                <option value="0">เลือกขนาดเสื้อ...</option>
                <option value='S'>S (33")</option>
                <option value='M'>M (36")</option>
                <option value='L'>L (40")</option>
                <option value='XL'>XL (44")</option>
                <option value='XXL'>XXL (48")</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <h6>ชื่อ-สกุล ผู้ปกครอง</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เช่น นายประหยัด จันทร์อังคารพุธ... " onChange={(e) => this.setState({ ParentName: e.target.value })}/>
            </Form.Group> 
            <br></br>
            <h6>ผู้ปกครองเกี่ยวข้องเป็น</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="เช่น พ่อ หรือ ป้า หรือ ย่า หรือ ยาย... " onChange={(e) => this.setState({ ParentType: e.target.value })}/>
            </Form.Group> 
            <br></br>
            <h6>เบอร์โทรศัพท์</h6>
            <Form.Group controlId="formGroup">
              <Form.Control placeholder="ex. 087-482-XXXX" onChange={(e) => this.setState({ ParentPhoneNumber: e.target.value })}/>
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
              <textarea class="form-control" rows="4" onChange={(e) => this.setState({ GradingAnswer1: e.target.value })}></textarea>
            </div>
            <br></br>
            <h6>คำถามข้อที่ 2</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control"  rows="4" onChange={(e) => this.setState({ GradingAnswer2: e.target.value })}></textarea>
            </div>
            <br></br>
            <h6>คำถามข้อที่ 3</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control"  rows="4" onChange={(e) => this.setState({ GradingAnswer3: e.target.value })}></textarea>
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
            <Form.Control placeholder="..." onChange={(e) => this.setState({ Answer1: e.target.value })}/>
          </Form.Group> 
          <br></br>
          <h6>น้องๆเคยเข้าร่วมโครงค่ายจุฬาฯ - ชลบุรีมาก่อนหรือไม่</h6>
          <Form.Group controlId="formT2">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={(e) => this.setState({ Answer2: e.target.value })}
            >
              <option value="0">เลือก...</option>
              <option value="เคย">เคย</option>
              <option value="ไม่เคย">ไม่เคย</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          <h6>คณะที่น้องอยากเข้ามากที่สุดพร้อมเหตุผล</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT3" rows="4" onChange={(e) => this.setState({ Answer3: e.target.value })}></textarea>
            </div>
          <br></br>
          <h6>มุมมองของน้องที่มีต่อจุฬาลงกรณ์มหาวิทยาลัย</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT4" rows="4" onChange={(e) => this.setState({ Answer4: e.target.value })}></textarea>
            </div>
          <br></br>
          <h6>ถ้าน้องขอพรได้ 1 ข้อ น้องจะขออะไร</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT4" rows="4" onChange={(e) => this.setState({ Answer5: e.target.value })}></textarea>
            </div>
          <br></br>
          <h6>ความคาดหวังต่อค่ายจุฬาฯ - ชลบุรี ครั้งที่ 42 พร้อมเหตุผล</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT4" rows="4" onChange={(e) => this.setState({ Answer6: e.target.value })}></textarea>
            </div>
          <br></br>
          <h6>สิ่งที่อยากจะบอกกับพี่ ๆ :3</h6>
            <div class="form-outline mb-4" id="formGroup">
              <textarea class="form-control" id="formT4" rows="4" onChange={(e) => this.setState({ Answer7: e.target.value })}></textarea>
            </div>
          <br></br>
        </div>
      </div>
        <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
          ส่งใบสมัคร
        </Button>
      </>
    );
  }
}

export default Register;
