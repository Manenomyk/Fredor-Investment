import React, { useEffect, useState } from "react";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import "./AuthItemList.css";
import * as authlist from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

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
