import React from 'react';
import { IoMdContact } from "react-icons/io";
import { FaListOl } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";


export const AuthScontent = [
    {
        icon:<AiFillHome style={{fontSize:"25px", color:"white" }} />,
        title: "Home",
        link: "./AuthDashboard",
        
    },
    {
        icon:<IoMdContact style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./AuthProfile"
    },
    {
        icon:<FaListOl style={{fontSize:"25px"}}/>,
        title: "Item List",
        link: "./AuthItemList"
    },

    {
        icon:<GiTakeMyMoney style={{fontSize:"25px", color:"green"}} />,
        title: "Transactions",
        link: "./Transactions"
    },
    {
        icon:<FaTruck style={{fontSize:"25px"}}/>,
        title: "Customer List",
        link: "./AuthCustomerList"
    },
    
    {
        icon:<FaFileInvoice style={{fontSize:"25px", color:"brown"}}/>,
        title: "Reports",
        link: "./AuthReport                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "
    },
    
] ;