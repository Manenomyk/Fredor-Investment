import axios from "axios";
import React, { useState } from "react";
import * as log from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import login from "../../Images/login.svg";
import avatar from "../../Images/avatar.svg";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Oval } from "react-loader-spinner";

function Login() {
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

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [logininput, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleinput = (e) => {
    e.persist();
    setlogin({ ...logininput, [e.target.name]: e.target.value });
  };

  const loginsubmit = (e) => {
    e.preventDefault();

    const data = {
      email: logininput.email,
      password: logininput.password,
    };
    setLoading(true);
    try {
      axios
        .post(`/api/login`, data)
        .then((res) => {
          console.log(res.data.status);

          setLoading(false);
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", JSON.stringify(res.data));
          if (res.data.status === 200) {
            setSuccessResponse("you have been Logged successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);

            navigate("/admindashboard");
          } else if (res.data.status === 401) {
            setLoading(false);
            setServerError("Invalid credentials.");
            setTimeout(() => {
              setServerError("");
            }, 2000);
          }else {
            setLoading(false);
            alert("oops, Fields are required");
            
          }
        })
        .catch((res) => {
          setLoading(false);
          console.log(res);
          if (res.response.status === 422) {
            seterrors(res.response.data.errors);
          }
        });
    } catch (error) {
      alert("oops, invalid credentials");
      console.log(error);
      setLoading(false);
      alert("Login failled");
      navigate("/register");
      setServerError("Invalid credentials.");

      setTimeout(() => {
        setServerError("");
      }, 2000);
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

      <log.Container className="logContainer">
        <log.Row>
          <div className="containerone">
            <div className="imgg">
              <img src={login} alt="login" />
            </div>
            <div className="regconta">
              <form action="" onSubmit={loginsubmit}>
                <div className="ava">
                  <img className="avatar" src={avatar} alt="avatar" />
                </div>
                <h2 className="wel">Welcome</h2>
                <div className="input-div one">
                  <div className="i">
                    <i>
                      <TfiEmail />
                    </i>
                  </div>
                  <div>
                    <h5>Username</h5>
                    <input
                      className="input"
                      type="text"
                      name="email"
                      onChange={handleinput}
                      value={logininput.email}
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[0]}</span>
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
                      className="input"
                      type="password"
                      name="password"
                      onChange={handleinput}
                      value={logininput.password}
                    />
                    {errors && (
                      <div className="flex">
                        <span className="dede">{errors[1]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <a href="#">Forgot password?</a>
                <div>
                  {loading && (
                    <button
                      onSubmit={loginsubmit}
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
                            Signing in...
                          </span>
                        </div>
                      </div>
                    </button>
                  )}

                  {!loading && (
                    <input
                      onSubmit={loginsubmit}
                      type="submit"
                      name=""
                      id=""
                      className="btn1"
                      value="Login"
                    />
                  )}
                </div>
                <div className="botom">
                  <p>Dont have an account?</p>
                  <a href="/register">Register</a>
                </div>
              </form>
            </div>
          </div>
        </log.Row>
      </log.Container>
    </div>
  );
}

export default Login;
