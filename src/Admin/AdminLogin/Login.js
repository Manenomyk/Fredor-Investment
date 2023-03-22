import axios from "axios";
import React, { useState } from "react";
import * as log from "react-bootstrap";
import "./Login.css";

function Login() {

const [logininput, setlogin] = useState({
  email:'',
  password:'',
});

const handleinput = (e) =>{
  e.persist();
  setlogin({...logininput, [e.target.name]: e.target.value}); 
};


const loginsubmit= (e)=>
{
  e.preventdefault();

  const data ={
    email: logininput.email,
    password: logininput.password,
  }

  axios.post(`api/login`, data).then(res=>{

  });
}

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
                <span>Email</span>
                <input
                  type="email"
                  className="form-control shadow-none mb-4"
                  name="email"
                  onChange={handleinput}
                  value={logininput.email}
                />
                <span>Password</span>
                <input
                  type="password"
                  className="form-control shadow-none mb-4"
                  name="password"
                  onChange={handleinput}
                  value={logininput.password}
                />

                <div className="logbtn">
                  <button className="logbtn btn btn-success" onClick={loginsubmit}>Login</button>
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
