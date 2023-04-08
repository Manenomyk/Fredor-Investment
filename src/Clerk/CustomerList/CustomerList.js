import React, {useEffect, useState} from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import './CustomerList.css';
import * as custolist from 'react-bootstrap';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function CustomerList() {
  const [isOpen, setIsOpen] = useState(false);
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
            </custolist.Col>
          </custolist.Row>
        </custolist.Container>
    </div>
  )
}

export default CustomerList