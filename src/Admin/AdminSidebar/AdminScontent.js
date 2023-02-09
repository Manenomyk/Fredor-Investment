import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FcPieChart } from "react-icons/fc";


export const AdminScontent = [
    {
        icon:<MdDashboardCustomize style={{fontSize:"25px", color:"white" }} />,
        title: "Home",
        link: "./AdminDashboard",
        
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./AdminProfile"
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Item List",
        link: "./ItemList"
    },
    {
        icon:<FcPieChart style={{fontSize:"25px"}}/>,
        title: "Users",
        link: "./AdminUsers"
    },
    {
        icon:<FaHandHoldingUsd style={{fontSize:"25px", color:"green"}} />,
        title: "Transactions",
        link: "./Transactions"
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Customer List",
        link: "./CustomerList"
    },
    
    {
        icon:<FaFileInvoice style={{fontSize:"25px", color:"brown"}}/>,
        title: "Reports",
        link: "./AdminReports"
    },
    
] ;