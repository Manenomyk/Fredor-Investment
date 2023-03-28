import React, {useEffect, useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminUsers.css';
import * as adminusers from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


function AdminUsers() {

  const [users, setusers] = useState([]);

  useEffect(() => {
   axios.get(`api/adminViewUsers`).then(res=>{
    console.log(res.data.viewusers);
    if(res.status === 200)
    {
      setusers(res.data.viewusers)
    }
   });
  }, []);
  
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
                {users.map((item, index)=>(
                  console.log('i', item),

                  <tr key={index}>

                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.roles}</td>
                  <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>

                ))}
                
              </tbody>
            </table>
            </adminusers.Col>
          </adminusers.Row>
        </adminusers.Container>
    </div>
  )
}

export default AdminUsers