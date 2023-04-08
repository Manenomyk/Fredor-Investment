import React, {useEffect, useState} from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import './ItemList.css';
import * as list from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function ItemList() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setitems] = useState([]);
  useEffect(() => {
    axios.get(`api/adminViewitems`).then((res) => {
      console.log(res.data.viewitems);
      if (res.status === 200) {
        setitems(res.data.viewitems);
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


      <list.Container>
        <list.Row>
          <list.Col className='mt-3' lg={12}>
          <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item description</th>
                  <th scope="col">Buying price</th>
                  <th scope="col">Selling price</th>
                </tr>
              </thead>
              <tbody>
              {items.map((item, index)=>[
                  <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.description}</td>
                  <td>{item.b_price}</td>
                  <td>{item.s_price}</td>
                </tr>
                ])}
              </tbody>
            </table>
          </list.Col>
        </list.Row>
      </list.Container>
      
    </div>
  )
}

export default ItemList