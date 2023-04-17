import React, {useEffect, useState} from "react";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import { IoMdContact } from "react-icons/io";
import "./AuthProfile.css";
import * as authprof from "react-bootstrap";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";



const id = localStorage.getItem('userID');

function AuthProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [authpro, setauthpro] = useState({
    name: "",
    email: "",
    phone_number: "",
    id_number: "",
    location: "",
  });

  useEffect(() => {
    // const userid=props.match.params.id;
   axios.get(`/api/view_profile/${id}`).then(res=>{
    console.log(res);
    if (res.data.status === 200) {
      setauthpro(res.data.profile)
    }
    else if (res.data.status === 404) {
      alert('not a user');
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

    try {
      axios
        .post(`api/authupdate`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    } catch (error) {}
  };
  return (
    <div>
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
                  <button
                    onClick={authupdate}
                    className="btn btn-danger"
                    id="updatebtn"
                  >
                    Update
                  </button>
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
