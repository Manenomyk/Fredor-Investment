import axios from "axios";
import React, { useState } from "react";
import * as log from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
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

    try {
      axios
        .post(`/api/login`, data)
        .then((res) => {
          console.log(res.status);

          setLoading(false);
          if (res.status === 200) {
            setSuccessResponse("you have been registered successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);

            // alert("registered successfully")
            navigate("/admindashboard");
          } else {
          }
        })
        .catch((res) => {
          setLoading(false);
          console.log(res.response.data.errors);
          if (res.response.status === 422) {
            seterrors(res.response.data.errors);
          }
        });
    } catch (error) {
      // alert("oops, invalid credentials")
      console.log(error);
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
      <log.Container className="logContainer">
        <log.Row>
          <log.Col className=" mx-auto" lg={5}>
            <log.Card className="logcard ">
              <log.Card.Title className="mx-auto mt-5 mb-5">
                Logo
              </log.Card.Title>
              <log.Card.Body>
                <div className="mb-2">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control shadow-none"
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

                <span>Password</span>
                <input
                  type="password"
                  className="form-control shadow-none"
                  name="password"
                  onChange={handleinput}
                  value={logininput.password}
                />
                {errors && (
                  <div className="flex">
                    <span className="dede">{errors[1]}</span>
                  </div>
                )}

                <div className="logbtn">
                  <button
                    className="logbtn btn btn-success"
                    onClick={loginsubmit}
                  >
                    Login
                  </button>
                </div>
              </log.Card.Body>
            </log.Card>
          </log.Col>
        </log.Row>
      </log.Container>
    </div>
  );
}

export default Login;
