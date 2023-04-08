import React, { useState } from 'react';
import './AcceptReturns.css';
import * as accept from 'react-bootstrap';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AcceptReturns() {
  const [isOpen, setIsOpen] = useState(false);
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
            <ClerkSidebar />
          </div>
        )}
      </div>
<ClerkSidebar />

        <accept.Container>
        <accept.Row>
          <accept.Col className='mt-3' lg={12}>
          <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item description</th>
                  <th scope="col">Regular Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">New quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  <td>5000</td>
                  <td>10</td>
                  <td><input type="text" className='acceptinput form-control shadow-none ' /></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  <td>15200</td>
                  <td>15800</td>
                  <td>15800</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sura kg</td>
                  <td>140</td>
                  <td>155</td>
                  <td>15800</td>
                </tr>
              </tbody>
            </table>


            <div>
                <button className='btn btn-success float-end'>Save</button>
            </div>
          </accept.Col>
        </accept.Row>
      </accept.Container>
    </div>
  )
}

export default AcceptReturns