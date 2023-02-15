import React from 'react';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import './AuthCustomerList.css';
import * as authlist from 'react-bootstrap';


function AuthCustomerList() {
  return (
    <div>
        <AuthSidebar />

        <authlist.Container className=''>
          <authlist.Row>
            <authlist.Col className='mt-3' lg={12}>
            
            <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Plate name</th>
                  
                  <th scope="col">Driver</th>
                  <th scope="col">ID. No</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>KCD</td>
                  <td>Kaluti</td>
                  <td>12345678</td>
                  <td>123456789</td>
                  <td>Maswali</td>
                </tr>
              </tbody>
            </table>
            </authlist.Col>
          </authlist.Row>
        </authlist.Container>
    </div>
  )
}

export default AuthCustomerList