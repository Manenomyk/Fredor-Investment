import React, { useState } from 'react';
import './ClerkTransactions.css';
import * as clerktrans from 'react-bootstrap';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function ClerkTransactions() {
  const [isOpen, setIsOpen] = useState(false);
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


        <clerktrans.Container>
            
            <clerktrans.Row>
                <div className='inputsearch'>
                    <input type="search" placeholder='Search...' className=' transearch form-control shadow-none mt-3'/>
                </div>
                <clerktrans.Col lg={12} className="mt-2">
                <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Mpesa Code</th>
        
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  
                </tr>
              </tbody>
            </table>
                </clerktrans.Col>
            </clerktrans.Row>
        </clerktrans.Container>
    </div>
  )
}

export default ClerkTransactions