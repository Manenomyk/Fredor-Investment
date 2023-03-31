import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as dash from 'react-bootstrap';

function AdminDashboard() {
  return (
    <div>
        <AdminSidebar />

        <dash.Container>
        <dash.Row className="mt-4">
          <dash.Col className="mx-auto" lg={3}>
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
                  <i>Total projects</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  All projects:
                </p>
                <h3>23</h3>
                {/* <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' /> */}
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto" lg={3}>
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
                  <i>Total Shares</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Completed projects:
                </p>
                <h3>23</h3>
                {/* <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' /> */}
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto" lg={3}>
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
                  <i>Total capital</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Capital invested:
                </p>
                <h3>23</h3>
                {/* <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' /> */}
              </div>
            </dash.Card>
          </dash.Col>

          <dash.Col className="mx-auto" lg={3}>
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
                  <i>Number of projects</i>
                </p>
              </div>

              <div className="">
                <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                  Projects invested in:
                </p>
                <h3>23</h3>
                {/* <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' /> */}
              </div>
            </dash.Card>
          </dash.Col>
        </dash.Row>

        <dash.Row className="mt-4">
          <dash.Col id="procontent" className="mx-auto" lg={6}>
            <div className="text-center mt-3 mb-3">Have a quick preview</div>

            <div>
              <table
                className="table table-striped"
                style={{ fontSize: "small" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Investment</th>
                    <th scope="col">Total</th>
                    <th scope="col">Total shares </th>
                    <th scope="col">Share prices</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Good House</td>
                    <td>Real Estate</td>
                    <td>20,000</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dash.Col>
          <dash.Col id="procontent" className="mx-auto" lg={4}>
            <div className="text-center mt-3 mb-3">Pending statuses</div>
            <div>
              <table
                className="table table-striped"
                style={{ fontSize: "small" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Investment</th>
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

  )
}

export default AdminDashboard