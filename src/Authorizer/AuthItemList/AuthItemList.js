import React, { useEffect, useState } from "react";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import "./AuthItemList.css";
import * as authlist from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

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

function AuthItemList() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setitems] = useState([]);
  useEffect(() => {
    axios.get(`api/adminViewitems`).then((res) => {
      console.log(res.data.viewitems);
      if (res.status === 200) {
        setitems(res.data.viewitems);
      }
    });
  }, []);

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


      <authlist.Container>
        <authlist.Row>
          <authlist.Col className="mt-3" lg={12}>
            <Link
              to={"../AuthAddItem"}
              className="addcustomer btn btn-primary btn-sm float-end mb-2"
            >
              +
            </Link>
            <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item description</th>
                  <th scope="col">Buying price</th>
                  <th scope="col">Selling price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => [
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.description}</td>
                    <td>{item.b_price}</td>
                    <td>{item.s_price}</td>
                    <td>
                      <button className="btn btn-success btn-sm">Edit</button>
                      <authlist.Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Share your idea
                    </authlist.Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    </td>

                    <td>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>,
                ])}
              </tbody>
            </table>
          </authlist.Col>
        </authlist.Row>
      </authlist.Container>
    </div>
  );
}

export default AuthItemList;
