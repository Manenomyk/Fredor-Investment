import React, { useEffect, useState } from "react";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import { IoMdContact } from "react-icons/io";
import "./AuthProfile.css";
import * as authprof from "react-bootstrap";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { Oval } from "react-loader-spinner";

const id = localStorage.getItem("userID");

function AuthProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, seterrors] = useState([]);
  const [authpro, setauthpro] = useState({
    name: "",
    email: "",
    phone_number: "",
    id_number: "",
    location: "",
  });

  useEffect(() => {
    // const userid=props.match.params.id;
    axios.get(`/api/view_profile/${id}`).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        setauthpro(res.data.profile);
      } else if (res.data.status === 404) {
        alert("not a user");
      }
    });
  }, []);

  const handleinput = (e) => {
    e.persist();

    setauthpro({ ...authpro, [e.target.name]: e.target.value });
  };

  const authupdate = (e) => {
    e.preventDefault();

    const data = {
      name: authpro.name,
      email: authpro.email,
      phone_number: authpro.phone_number,
      id_number: authpro.id_number,
      location: authpro.location,
    };

    setLoading(true);
    axios.put(`api/updateprofile/${id}`, data).then((res) => {
      console.log(res);
      setLoading(false);
      if (res.data.status === 200) {
        setSuccessResponse("Profile updated successfully.");

        setTimeout(() => {
          setSuccessResponse("");
        }, 4000);
        seterrors([]);
      } else if (res.data.status === 422) {
        seterrors(res.data.validation_errors);
      } else if (res.data.status === 404) {
        setServerError("Oooops, sorry profile update failed.");
        setTimeout(() => {
          setServerError("");
        }, 4000);
      } else {
        alert("please contact admin");
      }
    });
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
      <div>
        {!isOpen ? (
          <div
            style={{
              marginTop: "1rem",
              fontSize: "25px",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          >
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          </div>
        ) : (
          <div>
            <IoIosArrowDropleft
              onClick={() => setIsOpen(!isOpen)}
              style={{
                fontSize: "2rem",
                color: "#007CBA",
                position: "fixed",
                top: "2%",
                marginLeft: "187px",
                cursor: "pointer",
              }}
            />
            <AuthSidebar />
          </div>
        )}
      </div>

      <authprof.Container>
        <authprof.Row>
          <authprof.Col className="mx-auto" lg={7}>
            <authprof.Card className="profi">
              <authprof.Card.Title>
                <div className="edit">Edit profile</div>
                <div className="profiicon">
                  <div>
                    <IoMdContact />
                  </div>
                </div>
              </authprof.Card.Title>
              <authprof.Card.Body className="mx-auto">
                <div>
                  <div>Name</div>
                  <input
                    name="name"
                    onChange={handleinput}
                    value={authpro.name}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <div>
                  <div>Email adress</div>
                  <input
                    name="email"
                    onChange={handleinput}
                    value={authpro.email}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Phone number</div>
                  <input
                    name="phone_number"
                    onChange={handleinput}
                    value={authpro.phone_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Id Number</div>
                  <input
                    name="id_number"
                    onChange={handleinput}
                    value={authpro.id_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Location</div>
                  <input
                    name="location"
                    onChange={handleinput}
                    value={authpro.location}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <div>
                  {loading && (
                    <button
                      onClick={authupdate}
                      className="btn btn-danger"
                      id="updatebtn"
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
                          <span style={{ fontSize: "20px" }}>Updating...</span>
                        </div>
                      </div>
                    </button>
                  )}

                  {!loading && (
                    <div>
                      <button
                        onClick={authupdate}
                        className="btn btn-danger"
                        id="updatebtn"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
                <a href="" id="uplink">
                  Update password?
                </a>
              </authprof.Card.Body>
            </authprof.Card>
          </authprof.Col>
        </authprof.Row>
      </authprof.Container>
    </div>
  );
}

export default AuthProfile;
