import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminprof from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import './AdminProfile.css'
import axios from 'axios';

function AdminProfile() {

  const [adminpro, setadminpro] = useState({
    name : "",
    email: "",
    phone_number: "",
    id_number: "",
    location: "",

  });
const handleinput = (e)=>{
  e.persist();
  setadminpro({...adminpro, [e.target.name]: e.target.value});
};

const adminupdate = (e) =>{
  e.preventDefault();

  const data ={
    name: adminpro.name,
    email: adminpro.email,
    phone_number: adminpro.phone_number,
    id_number: adminpro.id_number,
    location: adminpro.location,
  };

  try {
    axios.post(`api/adminprofile`, data).then((res)=>{
      console.log(res);
    })
    .catch((res)=>{
      console.log(res);
    });
    
  } catch (error) {
    alert('oops, update failed');
  }
}

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
                        <input name='name' onChange={handleinput} value={adminpro.name} className='form-control shadow-none profinput' type="text" />
                      </div>
                      
                      <div>
                        <div>Email adress</div>
                        <input name='email' onChange={handleinput} value={adminpro.email} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Phone number</div>
                        <input name='phone_number' onChange={handleinput} value={adminpro.phone_number} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Id Number</div>
                        <input name='id_number' onChange={handleinput} value={adminpro.id_number} className='form-control shadow-none profinput' type="text" />
                      </div>
                      <div>
                        <div>Location</div>
                        <input  name='location' onChange={handleinput} value={adminpro.location} className='form-control shadow-none profinput' type="text" />
                      </div>
                    
                  
                      

                      <div>
                          <button onClick={adminupdate} className='btn btn-success' id='updatebtn'>Update</button>
                                  
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