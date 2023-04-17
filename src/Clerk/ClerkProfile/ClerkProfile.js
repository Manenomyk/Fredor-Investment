import React, { useState, useEffect } from "react";
import ClerkSidebar from "../ClerkSidebar/ClerkSidebar";
import * as clerkpro from "react-bootstrap";
import { IoMdContact } from "react-icons/io";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { Oval } from "react-loader-spinner";

const id = localStorage.getItem("userID");
function ClerkProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, seterrors] = useState([]);
  const [Clerkprof, setclerkprof] = useState({
    name: "",
    email: "",
    phone_number: "",
    id_number: "",
    location: "",
  });

  useEffect(() => {
    axios.get(`/api/view_profile/${id}`).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        setclerkprof(res.data.profile);
      } else if (res.data.status === 404) {
        alert("not a user");
      }
    });
  }, []);

  const handleinput = (e) => {
    e.persist();

    setclerkprof({ ...Clerkprof, [e.target.name]: e.target.value });
  };

  const clerkupdate = (e) => {
    e.preventDefault();

    const data = {
      name: Clerkprof.name,
      email: Clerkprof.email,
      phone_number: Clerkprof.phone_number,
      id_number: Clerkprof.id_number,
      location: Clerkprof.location,
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
            <ClerkSidebar />
          </div>
        )}
      </div>

      <clerkpro.Container>
        <clerkpro.Row>
          <clerkpro.Col className="mx-auto" lg={7}>
            <clerkpro.Card className="profi">
              <clerkpro.Card.Title>
                <div className="edit">Edit profile</div>
                <div className="profiicon">
                  <div>
                    <IoMdContact />
                  </div>
                </div>
              </clerkpro.Card.Title>
              <clerkpro.Card.Body className="mx-auto">
                <div>
                  <div>Name</div>
                  <input
                    name="name"
                    onChange={handleinput}
                    value={Clerkprof.name}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <div>
                  <div>Email adress</div>
                  <input
                    name="email"
                    onChange={handleinput}
                    value={Clerkprof.email}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Phone number</div>
                  <input
                    name="phone_number"
                    onChange={handleinput}
                    value={Clerkprof.phone_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Id Number</div>
                  <input
                    name="id_number"
                    onChange={handleinput}
                    value={Clerkprof.id_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <div>
                  <div>Location</div>
                  <input
                    name="location"
                    onChange={handleinput}
                    value={Clerkprof.location}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <div>
                  {loading && (
                    <button
                    onClick={clerkupdate}
                      className="btn btn-success"
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
                        onClick={clerkupdate}
                        className="btn btn-success"
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
              </clerkpro.Card.Body>
            </clerkpro.Card>
          </clerkpro.Col>
        </clerkpro.Row>
      </clerkpro.Container>
    </div>
  );
}

export default ClerkProfile;
