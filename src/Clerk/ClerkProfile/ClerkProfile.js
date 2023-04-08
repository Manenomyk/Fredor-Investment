import React, {useState} from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import * as clerkpro from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function ClerkProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [Clerkprof, setclerkprof] = useState({
    name:'',
    email:'',
    phone_number:'',
    id_number:'',
    location:'',
  });

  const handleinput =(e)=>{
    e.persist();

    setclerkprof({...Clerkprof, [e.target.name]: e.target.value})
  };

  const clerkupdate =(e)=>{
    e.preventDefault();

    const data={
      name: Clerkprof.name,
      email: Clerkprof.email,
      phone_number: Clerkprof.phone_number,
      id_number: Clerkprof.id_number,
      location: Clerkprof.location,
    };

    try {
      axios.post(`api/clerkprofile`, data).then((res)=>{
        console.log(res);
      }).catch((res)=>{
        console.log(res);
      })
      
    } catch (error) {
      
    }
  }
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
            <ClerkSidebar />
          </div>
        )}
      </div>




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
                        <input name='name' onChange={handleinput} value={Clerkprof.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                      
                      <div>
                        <div>Email adress</div>
                        <input name='email'onChange={handleinput} value={Clerkprof.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Phone number</div>
                        <input name='phone_number' onChange={handleinput} value={Clerkprof.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Id Number</div>
                        <input name='id_number' onChange={handleinput} value={Clerkprof.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Location</div>
                        <input  name='location' onChange={handleinput} value={Clerkprof.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                    
                  
                      

                      <div>
                          <button onClick={clerkupdate} className='btn btn-success' id='updatebtn'>Update</button>
                                  
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