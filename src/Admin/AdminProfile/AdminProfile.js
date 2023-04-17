import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import * as adminprof from "react-bootstrap";
import { IoMdContact } from "react-icons/io";
import "./AdminProfile.css";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

const id = localStorage.getItem("userID");
function AdminProfile() {
  const [successResponse, setSuccessResponse] = useState("");
  const [serverError, setServerError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, seterrors] = useState([]);

  const [adminpro, setadminpro] = useState({
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
        setadminpro(res.data.profile);
      } else if (res.data.status === 404) {
        alert("not a user");
      }
    });
  }, []);

  const handleinput = (e) => {
    e.persist();
    setadminpro({ ...adminpro, [e.target.name]: e.target.value });
  };

  const adminupdate = (e) => {
    e.preventDefault();

    const data = {
      name: adminpro.name,
      email: adminpro.email,
      phone_number: adminpro.phone_number,
      id_number: adminpro.id_number,
      location: adminpro.location,
    };

    axios.put(`api/updateprofile/${id}`, data).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        alert("profile updated successfully");
        seterrors([]);
      } else if (res.data.status === 422) {
        seterrors(res.data.validation_errors);
      } else if (res.data.status === 404) {
        alert("Ooops, User id not found");
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
            <AdminSidebar />
          </div>
        )}
      </div>

      <adminprof.Container>
        <adminprof.Row>
          <adminprof.Col className="mx-auto" lg={7}>
            <adminprof.Card className="profi">
              <adminprof.Card.Title>
                <div className="edit">Edit profile</div>
                <div className="profiicon">
                  <div>
                    <IoMdContact />
                  </div>
                </div>
              </adminprof.Card.Title>
              <adminprof.Card.Body className="mx-auto">
                <div>
                  <div>Name</div>
                  <input
                    name="name"
                    onChange={handleinput}
                    value={adminpro.name}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <small className="text-danger">{errors.name}</small>

                <div>
                  <div>Email adress</div>
                  <input
                    name="email"
                    onChange={handleinput}
                    value={adminpro.email}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <small className="text-danger">{errors.email}</small>
                <div>
                  <div>Phone number</div>
                  <input
                    name="phone_number"
                    onChange={handleinput}
                    value={adminpro.phone_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <small className="text-danger">{errors.phone_number}</small>
                <div>
                  <div>Id Number</div>
                  <input
                    name="id_number"
                    onChange={handleinput}
                    value={adminpro.id_number}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>

                <small className="text-danger">{errors.id_number}</small>
                <div>
                  <div>Location</div>
                  <input
                    name="location"
                    onChange={handleinput}
                    value={adminpro.location}
                    className="form-control shadow-none profinput"
                    type="text"
                  />
                </div>
                <small className="text-danger">{errors.location}</small>

                <div>
                  <button
                    onClick={adminupdate}
                    className="btn btn-success"
                    id="updatebtn"
                  >
                    Update
                  </button>
                </div>
                <a href="" id="uplink">
                  Update password?
                </a>
              </adminprof.Card.Body>
            </adminprof.Card>
          </adminprof.Col>
        </adminprof.Row>
      </adminprof.Container>
    </div>
  );
}

export default AdminProfile;
