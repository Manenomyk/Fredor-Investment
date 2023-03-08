import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminprof from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import './AdminProfile.css'

function AdminProfile() {
  return (
    <div >

      <AdminSidebar />
        
                                    
            <adminprof.Container>
              <adminprof.Row>
                <adminprof.Col className='mx-auto' lg={7}>
                  <adminprof.Card className='profi'>
                    <adminprof.Card.Title>
                      
                        <div className='edit'>Edit profile</div>
                        <div className='profiicon'>
                          
                        <div ><IoMdContact/></div>
                        
                      </div>
                    </adminprof.Card.Title>
                    <adminprof.Card.Body className='mx-auto'>
                      <div>
                        <div>Name</div>
                        <input name='name' className='form-control shadow-none profinput' type="text" />
                      </div>
                      
                      <div>
                        <div>Email adress</div>
                        <input name='email' className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Phone number</div>
                        <input name='phone_number' className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Id Number</div>
                        <input name='id_number' className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Location</div>
                        <input  name='location' className='form-control shadow-none profinput' type="text" />
                      </div>
                    
                  
                      

                      <div>
                          <button className='btn btn-success' id='updatebtn'>Update</button>
                                  
                      </div>
                      <a href="" id='uplink'>Update password?</a>

                    </adminprof.Card.Body>
                  </adminprof.Card>
                </adminprof.Col>
              </adminprof.Row>
            </adminprof.Container>


    </div>
  )
}

export default AdminProfile