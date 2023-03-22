import React, { useEffect, useState } from "react";
import * as register from "react-bootstrap";
import { IoMdContact } from "react-icons/io";
import "./Register.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleIput = (e) => {
    e.persist();
    setregInput({ ...reg, [e.target.name]: e.target.value });
  };

  const regSubmit = (e) => {
    e.preventDefault();

    // seterrors(validate(reg));
    setsub(true);

    const details = {
      name: reg.name,
      email: reg.email,
      password: reg.password,
      password_confirmation: reg.password_confirmation,
    };

    setLoading(true);
    try {
      axios
        .post(`/api/register`, details)
        .then((res) => {
          console.log(res.data);

          setLoading(false);
          if (res.status === 200) {
            setSuccessResponse("you have been registered successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);

            // alert("registered successfully")
            navigate("/login");
          } else {
          }
        })
        .catch((res) => {
          setLoading(false);
          console.log(res.response.data.validation_errors);
          if (res.response.status === 422) {
            seterrors(res.response.data.validation_errors);
          }
          // setLoading(false);
          // setServerError("Invalid credentials plz check them out")
          // setTimeout(()=>{
          //   setServerError("")
          // },2000)
        });
    } catch (error) {
      // alert("oops, invalid credentials")

      setLoading(false);
      setServerError("Invalid credentials.");
      setTimeout(() => {
        setServerError("");
      }, 2000);

      navigate("/register");
    }
  };

  return (
    <div>
      <div
        style={{
          marginLeft: "45%",
          marginTop: "0%",
          position: "fixed",
          zIndex: "2",
        }}
      >
        {successResponse && (
          <div
            style={{
              color: "white",
              fontSize: "15px",
              width: "120%",
              right: "0",
              background: "#28a745",
              borderRadius: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "6%",
              border: "1px solid lightgray",
              opacity: "0.7",
              transition: "0.5",
            }}
          >
            {successResponse}
          </div>
        )}
        {serverError && (
          <div
            style={{
              color: "white",
              fontSize: "15px",
              width: "120%",
              right: "0",
              background: "#ED4337",
              borderRadius: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "6%",
              border: "1px solid lightgray",
              opacity: "0.7",
              transition: "0.5",
            }}
          >
            {serverError}
          </div>
        )}
      </div>

      <register.Container>
        <register.Row>
          <register.Col className="mx-auto" lg={5}>
            <register.Card className="register">
              <register.Card.Title className="mx-auto">
                <IoMdContact className="registericon" />
                <register.Card.Body>
                  <div className="form">
                    <p>Name</p>
                    <input
                      onChange={handleIput}
                      value={reg.name}
                      name="name"
                      type="text"
                      className="registerinput"
                      placeholder="Enter name"
                    />
                    {errors &&
                    <div className="flex">
                        <span className="dede">{errors[0]}</span>
                    </div>}
                  </div>
                  <div className="form">
                    <p>Email</p>
                    <input
                      onChange={handleIput}
                      value={reg.email}
                      name="email"
                      type="text"
                      className="registerinput"
                      placeholder="Enter email address"
                    />
                    {errors &&
                    <div className="flex">
                        <span className="dede">{errors[1]}</span>
                    </div>}
                  </div>
                  <div className="form">
                    <p>Password</p>
                    <input
                      onChange={handleIput}
                      value={reg.password}
                      name="password"
                      type="password"
                      className="registerinput"
                      placeholder="Enter password"
                    />
                    
                  </div>
                  {errors &&
                    <div className="flex">
                        <span className="dede">{errors[2]}</span>
                    </div>}
                  <div className="form">
                    <p>Confirm Password</p>
                    <input
                      onChange={handleIput}
                      value={reg.password_confirmation}
                      name="password_confirmation"
                      type="password"
                      className="registerinput"
                      placeholder="Confirm Password"
                    />
                    {errors &&
                    <div className="flex">
                        <span className="dede">{errors[3]}</span>
                    </div>}
                  </div>

                  <div>
                    {loading && (
                      <button
                        onClick={regSubmit}
                        style={{
                          fontSize: "18px",
                          background: "transparent",
                          color: "black",
                          border: "none",
                          marginLeft: "28px",
                        }}
                      >
                        <div
                          style={{
                            placeItems: "center",
                            display: "grid",
                            top: "50%",
                            transform: "translate Y(50%)",
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Oval
                              height="20"
                              width="20"
                              color="blue"
                              ariaLabel="loading"
                            />
                            <span style={{ fontSize: "20px" }}>
                              Signing in...
                            </span>
                          </div>
                        </div>
                      </button>
                    )}

                    {!loading && (
                      <button
                        onClick={regSubmit}
                        className="btn btn-primary"
                        id="registerbtn"
                      >
                        Register
                      </button>
                    )}
                  </div>

                  <div>
                    <a id="signuplink" href="/login">
                      Already have an account?
                    </a>
                  </div>
                </register.Card.Body>
              </register.Card.Title>
            </register.Card>
          </register.Col>
        </register.Row>
      </register.Container>
    </div>
  );
}

export default Register;
