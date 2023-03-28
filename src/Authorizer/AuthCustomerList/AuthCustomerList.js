import React,  {useEffect, useState} from 'react';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import './AuthCustomerList.css';
import * as authlist from 'react-bootstrap';
import axios from 'axios';


function AuthCustomerList() {
  
  const [customerlist, setcustomerlist] = useState([]);

  useEffect(() => {
   axios.get(`api/adminViewcustomerlist`).then(res=>{
    console.log(res.data.viewcustomerlist);
    if(res.status === 200)
    {
      setcustomerlist(res.data.viewcustomerlist)
    }
   });
  }, []);

  return (
    <div>
        <AuthSidebar />

        <authlist.Container className=''>
          <authlist.Row>
            <authlist.Col className='mt-3' lg={12}>
            
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
              {customerlist.map((list,index)=>[
                  <tr key={index}>
                  <th scope="row">{list.id}</th>
                  <td>{list.plate_name}</td>
                  <td>{list.driver}</td>
                  <td>{list.id_no}</td>
                  <td>{list.phone}</td>
                  <td>{list.company}</td>
                </tr>
                ])}
              </tbody>
            </table>
            </authlist.Col>
          </authlist.Row>
        </authlist.Container>
    </div>
  )
}

export default AuthCustomerList