import React from 'react';
import { IoMdContact } from "react-icons/io";
import { FaListOl } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";


export const ClerkScontent = [
    {
        icon:<AiFillHome style={{fontSize:"25px", color:"white" }} />,
        title: "Home",
        link: "./ClerkDashboard",
        
    },
    {
        icon:<IoMdContact style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./ClerkProfile"
    },
    {
        icon:<FaListOl style={{fontSize:"25px"}}/>,
        title: "Item List",
        link: "./ItemList"
    },
    {
        icon:<FcSalesPerformance style={{fontSize:"25px"}}/>,
        title: "Make sale",
        link: "./MakeSale"
    },

    {
        icon:<GiTakeMyMoney style={{fontSize:"25px", color:"green"}} />,
        title: "Transactions",
        link: "./Transactions"
    },
    {
        icon:<FaTruck style={{fontSize:"25px"}}/>,
        title: "Customer List",
        link: "./CustomerList"
    },
    
    {
        icon:<FaFileInvoice style={{fontSize:"25px", color:"brown"}}/>,
        title: "Reports",
        link: "./ClerkReport                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "
    },
    
] ;