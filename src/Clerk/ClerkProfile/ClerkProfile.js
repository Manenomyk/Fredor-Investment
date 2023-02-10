import React from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import * as clerkpro from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";

function ClerkProfile() {
  return (
    <div>
      <ClerkSidebar />



      <clerkpro.Container>
              <clerkpro.Row>
                <clerkpro.Col className='mx-auto' lg={7}>
                  <clerkpro.Card className='profi'>
                    <clerkpro.Card.Title>
                      
                        <div className='edit'>Edit profile</div>
                        <div className='profiicon'>
                          
                        <div ><IoMdContact/></div>
                        
                      </div>
                    </clerkpro.Card.Title>
                    <clerkpro.Card.Body className='mx-auto'>
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

                    </clerkpro.Card.Body>
                  </clerkpro.Card>
                </clerkpro.Col>
              </clerkpro.Row>
            </clerkpro.Container>
    </div>
  )
}

export default ClerkProfile