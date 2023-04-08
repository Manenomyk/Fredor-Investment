import React from 'react';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import * as authdash from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AuthDashboard() {
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
           <AuthSidebar />
          </div>
        )}
      </div>

        
        <authdash.Container>
        <authdash.Row className="mt-4">
          <authdash.Col className="mx-auto mb-3" lg={3} >
            <authdash.Card
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
            </authdash.Card>
          </authdash.Col>

          <authdash.Col className="mx-auto mb-3" lg={3}>
            <authdash.Card
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
            </authdash.Card>
          </authdash.Col>

          <authdash.Col className="mx-auto mb-3" lg={3}>
            <authdash.Card
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
            </authdash.Card>
          </authdash.Col>

          <authdash.Col className="mx-auto mb-3" lg={3}>
            <authdash.Card
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
            </authdash.Card>
          </authdash.Col>
        </authdash.Row>

        <authdash.Row className="mt-4">
          <authdash.Col id="procontent" className="mx-auto mb-3" lg={6}>
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
          </authdash.Col>
          <authdash.Col id="procontent" className="mx-auto mb-3" lg={4}>
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
          </authdash.Col>
        </authdash.Row>
      </authdash.Container>
    </div>
  )
}

export default AuthDashboard