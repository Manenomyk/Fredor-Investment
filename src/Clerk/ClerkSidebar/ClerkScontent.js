import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FcPieChart } from "react-icons/fc";


export const ClerkScontent = [
    {
        icon:<MdDashboardCustomize style={{fontSize:"25px", color:"white" }} />,
        title: "Home",
        link: "./AuthDashboard",
        
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./AuthProfile"
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Item List",
        link: "./ItemList"
    },

    {
        icon:<FaHandHoldingUsd style={{fontSize:"25px", color:"green"}} />,
        title: "Transactions",
        link: "./Transactions"
    },
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Customer List",
        link: "./AuthCustomerList"
    },
    
    {
        icon:<FaFileInvoice style={{fontSize:"25px", color:"brown"}}/>,
        title: "Reports",
        link: "./AuthReport                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "
    },
    
] ;