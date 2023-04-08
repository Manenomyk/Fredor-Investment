import React, { useState } from 'react';
import './Logs.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Logs() {
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
            <AdminSidebar />
          </div>
        )}
      </div>
    </div>
  )
}

export default Logs