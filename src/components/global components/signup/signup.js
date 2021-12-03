//Importing React Component from react library
import React, { useState } from "react";
import axios from "axios";

// Importing User Components from Local Files
import PhoneInput from "react-phone-number-input"
import Button from "../../resuable components/button"
import Input from "../../resuable components/input"
import {postUserData} from '../../../../src/store/actions'
import {useDispatch} from 'react-redux'

/**
 * @author:"Akhilasai and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Signup Component having email validation and password validation.
 * Created Function for password validation , password validation required many functions to check conditions.  
 * We checked the Input string must contain Uppercase characters,Lowercase characters,Numbers and Special CHracters characters.
 * We checked the email is valid or invalid.Email should contain '@' symbol and so on...
 * Created Two page Registration in Single Page using States.
 */

function Signup() {
  const dispatch=useDispatch()
  const validateEmail = (email) => {
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      setValidateMsg1("Valid Email")
      return true;
    } else {
      setValidateMsg1("Please enter a valid email")
      return false;
    }
  }
  const isUpper = (pswd) => {
    let format = /[A-Z]/
    if (format.test(pswd)) {
      return true;
    }
    else {
      return false;
    }
  }
  const isLower = (pswd) => {
    let format = /[a-z]/
    if (format.test(pswd)) {
      return true;
    }
    else {
      return false;
    }
  }

  const specialTest = (pswd) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  }
  const isNumber = (pswd) => {
    let hasNumber = /\d/;
    if (hasNumber.test(pswd)) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (password) => {
    // let pswd=this.state.password
    let length = password.length;

    if (length >= 8 && isUpper(password) && isLower(password) && specialTest(password) && isNumber(password)) {
      // console.log("Strong password")
      setValidateMsg("strong password")
      return true
    }
    else {
      // console.log("Please enter a valid password")
      setValidateMsg("Please enter a valid password")
      return false
    }
  }
  const submitDetails = async () => {
    console.log("coming")
    setButton(true)
   
    if (validateEmail(email) && check) {
      const body = { firstName, lastName, userName, email, password, phoneNumber, bday };
      dispatch(postUserData(body))

      // let url = "http://localhost:1109/userPostData";

      // const success = (data) => {
      //   console.log(data)
      //   if (data) {
      //     setError("User created successfully")
      //     setSignupVisible(false)
      //   }
      //   setError("")
      // };
      // const failure = (err) => {
      //   console.log("Error", err);
      // };
     
      // window.location.href = "/login"
    }
  }
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhonenumber] = useState("")
  const [bday, setBirthday] = useState("")
  const [validatemsg, setValidateMsg] = useState("");
  const [validatemsg1, setValidateMsg1] = useState("");
  const [error, setError] = useState("")
  const [check, setCheck] = useState(false)
  const [buttonClick, setButton] = useState(false)
  const [signupVisible, setSignupVisible] = useState(true);
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-5" >
        <div className="card d-flex flex-column align-items-center p-3 shadow-lg">
          <i className="fab fa-snapchat-ghost fa-3x text-center" style={{ color: "yellow" }}></i>
          <h1 style={{ marginBottom: "30px" }}>Sign Up for Snapchat</h1>
          {visible ? (<><div style={{ width: "40rem" }} className="d-flex flex-row mb-3">
            <PhoneInput
              className="form-control mb-3"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={setPhonenumber}
            />
          </div>
            <div style={{ width: "40rem" }} className="d-flex flex-row mb-3">
              <Input
                type="date"
                name="birthday"
                value={bday}
                className="form-control"
                handleChange={(child) => setBirthday(child)}
              />
            </div>
            <div className="d-flex flex-row justify-content-center ">
              <Button 
              className="btn btn-primary mr-3" 
              value="back" 
              handleClick={() => { setVisible(false) }}></Button>
              <Button 
              className="btn btn-primary" 
              handleClick={submitDetails} 
              value="Signup"></Button>
            </div>
          </>) : (<><div style={{ width: "40rem" }} className="d-flex flex-row">
            <Input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter First Name"
              value={firstName}
              handleChange={(child) => setFirstName(child)}
            />
            <Input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter Last Name"
              value={lastName}
              handleChange={(child) => setLastName(child)}
            />
          </div>
            <Input
              type="text"
              className="form-control mb-3"
              placeholder="Enter  UserName"
              value={userName}
              handleChange={(child) => setUserName(child)}
            />
            <Input type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
              value={email}
              handleChange={(child) => {
                setEmail(child)
                validateEmail(child)
              }}
            />
            <p>{validatemsg1}</p>
            <Input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Password"
              value={password}
              handleChange={(child) => {
                setPassword(child)
                validate(child)
              }}
            />
            <p >{validatemsg}</p>
            <div style={{ width: "40rem" }} className="d-flex flex-row mt-3" >
              <Input
                type="checkbox"
                handleChange={() => setCheck(!check)} />
              <p
                className="font-weight-bold"
                style={{ fontSize: "10px" }}>
                By tapping Sign Up & Accept, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service. We'll send you a message to verify this number. Messaging rates may apply. Snapchatters can always capture or save your messages, such as by taking a screenshot or using a camera. Be mindful of what you Snap!</p>
            </div>
            <div className="d-flex flex-column justify-content-center mt-3">
              <Button
                className="btn btn-primary"
                handleClick={() => setVisible(true)}
                value="Next"></Button>
              {console.log(visible)}
              {buttonClick ? check ? "" : (<p style={{ color: "red" }}>please accept terms and conditions</p>) : ("")}
              {buttonClick ? check ? (<p style={{ color: "green" }}>User created sucessfully</p>) : "" : ""}
            </div>
          </>)}

        </div>
      </div>
    </>
  );
}


//Exporting File
export default Signup;