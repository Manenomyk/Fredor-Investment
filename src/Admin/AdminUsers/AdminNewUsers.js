import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminUsers.css';
import * as adminnew from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';


function AdminNewUsers() {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const navigate = useNavigate();
const [newuser, setnewuser] = useState({
  name: '',
  email: '',
  phone_number: '',
  id_number: '',
  location: '',
  designition: '',
});

const handleinput = (e) =>{
  e.persist();

  setnewuser({...newuser, [e.target.name]: e.target.value})
};

const createuser = (e) =>{
  e.preventDefault();

  const data={
    name: newuser.name,
    email: newuser.email,
    phone_number: newuser.phone_number,
    id_number: newuser.id_number,
    location: newuser.location,
    designition: newuser.designition,
  };
  setLoading(true);
  try {
    axios.post(`api/createuser`, data).then((res)=>{
      console.log(res);

    })
    .catch((res)=>{
      console.log(res);
    })
  } catch (error) {
    
  }
}

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
                           <input name='name' onChange={handleinput} value={newuser.name} className='form-control shadow-none ' type="text" />
                          </div>
                      
                           <div>
                            <label>Email adress</label>
                            <input name='email' onChange={handleinput} value={newuser.email} className='form-control shadow-none ' type="text" />
                           </div>
                        </div>
                      


                      <div className='addin d-flex mb-3'>
                          <div>
                             <label>Phone number</label>
                             <input name='phone_number' onChange={handleinput} value={newuser.phone_number} className='form-control shadow-none ' type="text" />
                          </div>
                          <div>
                             <label>Id Number</label>
                             <input name='id_number' onChange={handleinput} value={newuser.id_number} className='form-control shadow-none ' type="text" />
                          </div>
                          
                      </div>

                      <div className='addin d-flex mb-5'>
                          <div>
                             <label>Location</label>
                             <input  name='location' onChange={handleinput} value={newuser.location} className='form-control shadow-none ' type="text" />
                          </div>
                          <div>
                             <label>Designation</label>
                             <input  name='designition' onChange={handleinput} value={newuser.designition} className='form-control shadow-none ' type="text" />
                          </div>
                      </div>
                      
                    
                  
                      <div className='details2 d-flex mb-3'>
                            <button onClick={createuser} className='btn btn-success'>Create User</button>
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