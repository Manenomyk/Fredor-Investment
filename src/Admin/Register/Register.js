import React, { useEffect, useState } from "react";
import * as register from "react-bootstrap";
import { IoMdContact } from "react-icons/io";
import "./Register.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import login from "../../Images/login.svg";
import avatar from "../../Images/avatar.svg";
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";



function MyVerticallyCenteredModal(props) {
  return (
    <authlist.Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <authlist.Modal.Header closeButton>
        <authlist.Modal.Title id="contained-modal-title-vcenter"></authlist.Modal.Title>
      </authlist.Modal.Header>
      <authlist.Modal.Body>
        <div>
          Full Name
          <input
            className="form-control shadow-none mb-4"
            name="name"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          Email Adress
          <input
            className="form-control shadow-none mb-4"
            name="email"
            placeholder="Enter Email Address"
            type="email"
          />
        </div>
        <div>
          Voluteer/Contributor message
          <textarea
            rows={4}
            className="form-control shadow-none mb-4"
            name="massage"
            placeholder="Share your message"
            type="text"
          />
        </div>
      </authlist.Modal.Body>
      <authlist.Modal.Footer>
        <div>
          <button type="submit" className="btn btn-primary">Send message</button>
        </div>
      </authlist.Modal.Footer>
    </authlist.Modal>
  );
}


function Register() {
  const inputs = document.querySelectorAll(".input");
  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

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
          <div className="containerone">
            <div className="imgg">
              <img src={login} alt="login" />
            </div>
            <div className="regconta">
              <form action="" onSubmit={regSubmit}>
                <div className="ava">
                  <img className="avatar" src={avatar} alt="avatar" />
                </div>
                <h2 className="wel">Welcome</h2>
                <div className="input-div one">
                  <div className="i">
                    <i>
                      <FaUserCircle />
                    </i>
                  </div>
                  <div>
                    <h5>Username</h5>
                    <input
                      placeholder="Username"
                      className="input"
                      type="text"
                      onChange={handleIput}
                      value={reg.name}
                      name="name"
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-div one">
                  <div className="i">
                    <i>
                      <TfiEmail />
                    </i>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <input
                      placeholder="Email"
                      className="input"
                      type="text"
                      onChange={handleIput}
                      value={reg.email}
                      name="email"
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[1]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-div two">
                  <div className="i">
                    <i>
                      <FaLock />
                    </i>
                  </div>
                  <div>
                    <h5>password</h5>
                    <input
                      placeholder="password"
                      className="input"
                      type="password"
                      onChange={handleIput}
                      value={reg.password}
                      name="password"
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[3]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-div two">
                  <div className="i">
                    <i>
                      <FaLock />
                    </i>
                  </div>
                  <div>
                    <h5> confirm password</h5>
                    <input
                      placeholder="confirm password"
                      className="input"
                      type="password"
                      onChange={handleIput}
                      value={reg.password_confirmation}
                      name="password_confirmation"
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[4]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {loading && (
                    <button
                      onSubmit={regSubmit}
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
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Oval
                            height="20"
                            width="20"
                            color="blue"
                            ariaLabel="loading"
                          />
                          <span style={{ fontSize: "20px" }}>
                            Signing up...
                          </span>
                        </div>
                      </div>
                    </button>
                  )}

                  {!loading && (
                    <input
                      onSubmit={regSubmit}
                      type="submit"
                      name=""
                      id=""
                      className="btn1"
                      value="Register"
                    />
                  )}
                </div>
                <div className="botom">
                  <p>Already have an account?</p>
                  <a href="/login">Login</a>
                </div>
              </form>
            </div>
          </div>
        </register.Row>
      </register.Container>
    </div>
  );
}

export default Register;
