import React, {useEffect, useState} from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import './CustomerList.css';
import * as custolist from 'react-bootstrap';
import axios from 'axios';

function CustomerList() {
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
      <ClerkSidebar />

      <custolist.Container className=''>
          <custolist.Row>
            <custolist.Col className='mt-3' lg={12}>
        
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
                <tr>
                  <th scope="row">1</th>
                  <td>KCD</td>
                  <td>Kaluti</td>
                  <td>12345678</td>
                  <td>123456789</td>
                  <td>Maswali</td>
                </tr>
              </tbody>
            </table>
            </custolist.Col>
          </custolist.Row>
        </custolist.Container>
    </div>
  )
}

export default CustomerList