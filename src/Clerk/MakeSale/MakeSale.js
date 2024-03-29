import React, { useState } from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import './MakeSale.css';
import * as sale from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function MakeSale() {
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



      <sale.Container>
        <sale.Row>
             <div className='inputsearch'>
                    <input placeholder='Search...' type="search" className=' transearch form-control shadow-none mt-3'/>
              </div>
          <sale.Col className='mt-3' lg={12}>
          <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col"></th>
                  <th scope="col">Item description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><input type="checkbox" /></td>
                  <td>Maize - 90kg bag</td>
                  <td>5000</td>
                  <td><td><input type="text" className='acceptinput form-control shadow-none ' /></td></td>
                  <td>1234567</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><input type="checkbox" /></td>
                  <td>Soya - 90kg bag</td>
                  <td>15200</td>
                  <td>15800</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td><input type="checkbox" /></td>
                  <td>Sura kg</td>
                  <td>140</td>
                  <td>155</td>
                </tr>
              </tbody>
            </table>


            <div>
                <button className='btn btn-success float-end'>Save</button>
            </div>
          </sale.Col>
        </sale.Row>
      </sale.Container>
    </div>
  )
}

export default MakeSale