import React from 'react';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import { IoMdContact } from "react-icons/io";
import './AuthProfile.css';
import * as authprof from 'react-bootstrap';


function AuthProfile() {
  return (
    <div>
        <AuthSidebar />


        <authprof.Container>
              <authprof.Row>
                <authprof.Col className='mx-auto' lg={7}>
                  <authprof.Card className='profi'>
                    <authprof.Card.Title>
                      
                        <div className='edit'>Edit profile</div>
                        <div className='profiicon'>
                          
                        <div ><IoMdContact/></div>
                        
                      </div>
                    </authprof.Card.Title>
                    <authprof.Card.Body className='mx-auto'>
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
                          <button className='btn btn-danger' id='updatebtn'>Update</button>
                                  
                      </div>
                      <a href="" id='uplink'>Update password?</a>

                    </authprof.Card.Body>
                  </authprof.Card>
                </authprof.Col>
              </authprof.Row>
            </authprof.Container>
    </div>
  )
}

export default AuthProfile