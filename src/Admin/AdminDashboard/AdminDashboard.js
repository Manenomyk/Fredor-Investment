import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import * as dash from "react-bootstrap";
import './AdminDashboard.css';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="admindash">
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

      

      <dash.Container>
        <dash.Row className="mt-4">
          <dash.Col className="mx-auto mb-3" lg={3} >
            <dash.Card
              id="homcard1"
              style={{
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgb(60, 110, 94)",
                color: "white",
              }}
            >
              <div className="text-center mt-2">
                <p>
                  <i>Total Users</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  All Users:
                </p>
                <h3>23</h3>
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto mb-3" lg={3}>
            <dash.Card
              id="homcard1"
              style={{
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgb(74, 131, 9)",
                color: "white",
              }}
            >
              <div className="text-center mt-2">
                <p>
                  <i>Total Vehicles</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Customerlist:
                </p>
                <h3>23</h3>
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto mb-3" lg={3}>
            <dash.Card
              id="homcard1"
              style={{
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgb(87, 122, 64)",
                color: "white",
              }}
            >
              <div className="text-center mt-2">
                <p>
                  <i>Total sales</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Amount Received:
                </p>
                <h3>23</h3>
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto mb-3" lg={3}>
            <dash.Card
              id="homcard1"
              style={{
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgb(114, 97, 62)",
                color: "white",
              }}
            >
              <div className="text-center mt-2">
                <p>
                  <i>Total Sales Profit</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Profit margin:
                </p>
                <h3>23</h3>
              </div>
            </dash.Card>
          </dash.Col>
        </dash.Row>

        <dash.Row className="mt-4">
          <dash.Col id="procontent" className="mx-auto mb-3" lg={6}>
            <div className="text-center mt-3 mb-3">Have a quick preview</div>

            <div>
              <table
                className="table table-striped"
                style={{ fontSize: "small" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Vehicle Name</th>
                    <th scope="col">Total out</th>
                    <th scope="col">Total Returns </th>
                    <th scope="col">Total sales</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>KCD</td>
                    <td>800000</td>
                    <td>200000</td>
                    <td>60000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dash.Col>
          <dash.Col id="procontent" className="mx-auto mb-3" lg={4}>
            <div className="text-center mt-3 mb-3">Pending statuses</div>
            <div>
              <table
                className="table table-striped"
                style={{ fontSize: "small" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Good House</td>
                    <td>Real Estate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dash.Col>
        </dash.Row>
      </dash.Container>
    </div>
  );
}

export default AdminDashboard;
