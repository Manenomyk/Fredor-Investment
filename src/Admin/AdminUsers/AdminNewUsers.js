import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminUsers.css';
import * as adminnew from 'react-bootstrap';
import { Link } from 'react-router-dom'; 


function AdminNewUsers() {
  return (
    <div>
        <AdminSidebar />
        
        <adminnew.Container>
        <Link to={'../AdminUsers'} className='addcustomer btn btn-primary btn-sm float-end mt-3'>Back</Link >
              <adminnew.Row>
              
                <adminnew.Col className='mx-auto' lg={8}>
                  <adminnew.Card className='profi mt-5'>
                    <adminnew.Card.Title>
                      
                        <div className='edit'>Create User</div>
                        
                    </adminnew.Card.Title>
                    <adminnew.Card.Body className='mx-auto'>
                        <div className='addin d-flex mb-3'>
                          <div>
                           <label>Name</label>
                           <input name='name' className='form-control shadow-none ' type="text" />
                          </div>
                      
                           <div>
                            <label>Email adress</label>
                            <input name='email' className='form-control shadow-none ' type="text" />
                           </div>
                        </div>
                      


                      <div className='addin d-flex mb-3'>
                          <div>
                             <label>Phone number</label>
                             <input name='phone_number' className='form-control shadow-none ' type="text" />
                          </div>
                          <div>
                             <label>Id Number</label>
                             <input name='id_number' className='form-control shadow-none ' type="text" />
                          </div>
                          
                      </div>

                      <div className='addin d-flex mb-5'>
                          <div>
                             <label>Location</label>
                             <input  name='location' className='form-control shadow-none ' type="text" />
                          </div>
                          <div>
                             <label>Designation</label>
                             <input  name='location' className='form-control shadow-none ' type="text" />
                          </div>
                      </div>
                      
                    
                  
                      <div className='details2 d-flex mb-3'>
                            <button className='btn btn-success'>Create User</button>
                      </div>

                    </adminnew.Card.Body>
                  </adminnew.Card>
                </adminnew.Col>
              </adminnew.Row>
            </adminnew.Container>
    </div>
  )
}

export default AdminNewUsers