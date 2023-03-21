import React from "react";
import * as home from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homepage.css";

import wheat from "../../Images/wheat.jpg";

function Homepage() {
  return (
    <div>
      <div className="homenav">
        <home.Container className="pt-3">
          <h5>
            Logo
            <Link to={"/Login"} className="btn btn-success btn-sm float-end">
              Login
            </Link>
          </h5>
        </home.Container>
      </div>
      <div className="section1 homeimage">
        <home.Container>
          <home.Row>
            <home.Col lg={5} className="details">
              <div>
              <h3 className="welcome">Welcome to </h3>
              <h1 className="name">FREDOR INVESTMENTS</h1>
              <div className="content">
                Your one stop store for all your cereal needs,
                We are glad to have you as our partners. 
              </div>

              <div className="welcome">
                <button className="btn btn-success">Check Us Out</button>
              </div>
              </div>
            </home.Col>
          </home.Row>
        </home.Container>
      </div>
      <div className="copy">
            <a href="https://bahaticodes.web.app" className="link" target='_blank'>
              &copy; BahatiCodes
            </a>
          </div>
    </div>
  );
}

export default Homepage;
