import React, {useEffect, useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admincusto from 'react-bootstrap';
import './AdminCustomerList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AdminCustomerList() {
  const [customerlist, setcustomerlist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
            <AdminSidebar />
          </div>
        )}
      </div>

        <admincusto.Container className=''>
          <admincusto.Row>
            <admincusto.Col className='mt-3' lg={12}>
            
              <Link to={'../AdminAddCustomer'} className='addcustomer btn btn-primary btn-sm float-end mb-2'>+</Link >
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
            </admincusto.Col>
          </admincusto.Row>
        </admincusto.Container>
        
    </div>
  )
}

export default AdminCustomerList