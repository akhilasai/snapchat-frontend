//Importing React component from React Library
import React, { Component, useState } from "react";
import axios from "axios";

//Importing Link from React Router Dom
import { Link } from "react-router-dom";

//Importing User Components from Local Files
import Button from "../../resuable components/button";
// import Signup from "../signup/signup";
import Input from "../../resuable components/input"

/**
 * @authors:"Akhilasai and Spandana"
 * @returns {Html}
 * Creating a functional component and returns UI on the browser.
 * Implementation of Login Component using States.
 */
function Login() {
  const onSubmit = () => {
    const success = (data) => {
      console.log(data);
      if (data.length == 0) {
        setInvalidDetails(true);
        setError("Invalid credentials");
        // setSignupVisible(true)
      } else {
        setError("");

        window.location.href = "./dashboard";
      }

      console.log(data);
    };
    const failure = (err) => {
      console.log(err);
    };
    const body = { userName, password };
    // let url = " http://localhost:1109/validateDetails";

    axios.post("http://localhost:1109/login", body).then((response) => {
      console.log(response)
    });
  }

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [signupVisible, setSignupVisible] = useState(false);
    const [invalidDetails, setInvalidDetails] = useState(false);

    return (
      <>
        <div className="container mt-5">
          <div className="row d-flex flex-row justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <div
                className="card p-3 shadow-lg"
                style={{ borderRadius: "10px", width: "600px" }}
              >
                <i
                  className="fab fa-snapchat-ghost fa-3x text-center"
                  style={{ color: "yellow" }}
                ></i>
                <h1 className="heading text-center">Log in to Snapchat</h1>
                <div className="form">
                  <label
                    for="email"
                    className="col-12 font-weight-bold"
                    style={{ fontSize: "10px" }}
                  >
                    Username or Email
                  </label>
                  <Input
                    className="form-control col-12"
                    type="text"
                    handleChange={(child) => setUserName(child)}
                  />
                  <label
                    for="passsword"
                    className="col-12 font-weight-bold"
                    style={{ fontSize: "10px" }}
                  >
                    Password
                  </label>
                  <Input
                    className="form-control col-12"
                    type="password"
                    handleChange={(child) => setPassword(child)}
                  />
                  <Link to="/forget">
                    <p className="col-12 text-right">Forget Password?</p>
                  </Link>

                  <div className="d-flex flex-column align-items-center">
                    <Button
                      className="btn btn-primary"
                      handleClick={() => onSubmit()}
                      value="Submit"
                    />

                  </div>
                  <p className="text-danger">{error}</p>
                  {invalidDetails ? <a href="./signup">Create account</a> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Login;
