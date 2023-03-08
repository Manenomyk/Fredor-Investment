import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminUsers.css';
import * as adminusers from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AdminUsers() {
  return (
    <div>
        <AdminSidebar />

        <adminusers.Container>
          
          <adminusers.Row>

            <adminusers.Col lg={12} className="mt-3">
            <Link to={'../AdminNewUsers'} className='addcustomer btn btn-primary btn-sm float-end mb-2'>+</Link >
            <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Full name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Designition</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mwavu Lukas</td>
                  <td>mwavu@gmail.com</td>
                  <td>123456789</td>
                  <td>Admin</td>
                  <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>
              </tbody>
            </table>
            </adminusers.Col>
          </adminusers.Row>
        </adminusers.Container>
    </div>
  )
}

export default AdminUsers