import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./AdminUsers.css";
import * as adminnew from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AdminNewUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const navigate = useNavigate();
  const [newuser, setnewuser] = useState({
    name: "",
    email: "",
    phone_number: "",
    id_number: "",
    location: "",
    designition: "",
  });

  const handleinput = (e) => {
    e.persist();

    setnewuser({ ...newuser, [e.target.name]: e.target.value });
  };

  const createuser = (e) => {
    e.preventDefault();

    const data = {
      name: newuser.name,
      email: newuser.email,
      phone_number: newuser.phone_number,
      id_number: newuser.id_number,
      location: newuser.location,
      designition: newuser.designition,
    };
    setLoading(true);
    try {
      axios
        .post(`api/createuser`, data)
        .then((res) => {
          console.log(res);
          setLoading(false);
          if (res.status === 200) {
            setSuccessResponse("User created successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);
          } else {
            alert("user not added");
          }
        })
        .catch((res) => {
          console.log(res);
          setLoading(false);
          setServerError("Failed to add user");
          setTimeout(() => {
            setServerError("");
          }, 2000);
        });
    } catch (error) {
      alert("Ooops, invalid action");
    }
  };

  return (
    <div>
      <div
        style={{
          marginLeft: "40%",
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
            <AdminSidebar />
          </div>
        )}
      </div>

      <adminnew.Container>
        <Link
          to={"../AdminUsers"}
          className="addcustomer btn btn-primary btn-sm float-end mt-3"
        >
          Back
        </Link>
        <adminnew.Row>
          <adminnew.Col className="mx-auto" lg={8}>
            <adminnew.Card className="profi mt-5">
              <adminnew.Card.Title>
                <div className="edit">Create User</div>
              </adminnew.Card.Title>
              <adminnew.Card.Body className="mx-auto">
                <div className="addin d-flex mb-3">
                  <div>
                    <label>Name</label>
                    <input
                      name="name"
                      onChange={handleinput}
                      value={newuser.name}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>

                  <div>
                    <label>Email adress</label>
                    <input
                      name="email"
                      onChange={handleinput}
                      value={newuser.email}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>
                </div>

                <div className="addin d-flex mb-3">
                  <div>
                    <label>Phone number</label>
                    <input
                      name="phone_number"
                      onChange={handleinput}
                      value={newuser.phone_number}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>
                  <div>
                    <label>Id Number</label>
                    <input
                      name="id_number"
                      onChange={handleinput}
                      value={newuser.id_number}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>
                </div>

                <div className="addin d-flex mb-5">
                  <div>
                    <label>Location</label>
                    <input
                      name="location"
                      onChange={handleinput}
                      value={newuser.location}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>
                  <div>
                    <label>Designation</label>
                    <input
                      name="designition"
                      onChange={handleinput}
                      value={newuser.designition}
                      className="form-control shadow-none "
                      type="text"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    {loading && (
                      <button
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
                              Adding User...
                            </span>
                          </div>
                        </div>
                      </button>
                    )}

                    {!loading && (
                      <div className="details2 d-flex mb-3">
                        <button
                          onClick={createuser}
                          className="btn btn-success"
                        >
                          Create User
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </adminnew.Card.Body>
            </adminnew.Card>
          </adminnew.Col>
        </adminnew.Row>
      </adminnew.Container>
    </div>
  );
}

export default AdminNewUsers;
