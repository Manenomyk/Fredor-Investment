import React from 'react';
import { IoMdContact } from "react-icons/io";
import { FaListOl } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";


export const AdminScontent = [
    {
        icon:<AiFillHome style={{fontSize:"25px", color:"white" }} />,
        title: "Home",
        link: "./AdminDashboard",
        
    },
    {
        icon:<IoMdContact style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./AdminProfile"
    },
    {
        icon:<FaListOl style={{fontSize:"25px"}}/>,
        title: "Item List",
        link: "./AdminItemList"
    },
    {
        icon:<FaUserCheck style={{fontSize:"25px", color: 'pink'}}/>,
        title: "Users",
        link: "./AdminUsers"
    },
    {
        icon:<GiTakeMyMoney style={{fontSize:"25px", color:"yellow"}} />,
        title: "Transactions",
        link: "./Transactions"
    },
    {
        icon:<FaTruck style={{fontSize:"25px"}}/>,
        title: "Customer List",
        link: "./AdminCustomerList"
    },
    
    {
        icon:<FaFileInvoice style={{fontSize:"25px", color:"brown"}}/>,
        title: "Reports",
        link: "./AdminReports"
    },
    
] ;