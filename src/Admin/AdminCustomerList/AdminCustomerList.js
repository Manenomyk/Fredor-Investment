import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admincusto from 'react-bootstrap';
import './AdminCustomerList.css';
import { Link } from 'react-router-dom';

function AdminCustomerList() {
  return (
    <div>
        <AdminSidebar />

        <admincusto.Container className=''>
          <admincusto.Row>
            <admincusto.Col className='mt-3' lg={12}>
            
              <Link to={'../AdminAddCustomer'} className='addcustomer btn btn-primary btn-sm float-end mb-2'>+</Link >
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
            </admincusto.Col>
          </admincusto.Row>
        </admincusto.Container>
        
    </div>
  )
}

export default AdminCustomerList