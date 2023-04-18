import React, { useState } from "react";
// import Navbar from '../Navbar/Navbar';
import { AdminScontent } from './AdminScontent';
import { MdLogout } from "react-icons/md";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



import './AdminSidebar.css';

function AdminSidebar() {



    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            axios.post(`/api/logout`) .then(res =>{
                console.log(res.data);
                setLoading(false);
    
                if (res.status === 200) {
    
                    localStorage.removeItem("auth_token");
                    localStorage.removeItem("auth_name", JSON.stringify(res.data.user));
                    localStorage.removeItem("userID", JSON.stringify(res.data.userID));
            
                    setSuccessResponse("you have been registered successfully.");
                    setTimeout(() => {
                      setSuccessResponse("")
                    }, 2000);
    
                    navigate('/');
        
        
                } else {
        
                    alert("Log out Incomplete")
        
                }
            }).catch(res =>{
                console.log(res);
                    
                setLoading(false);
                setServerError("Failed to log out")
                setTimeout(()=>{
                    setServerError("")
                },2000)
    
                    
                    });
        } catch (error) {
            alert('Ooops, failed to logout');
        }

    }




    return ( 
        <div>

           <div style={{marginLeft:"40%",marginTop:"0%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
             </div>




            <div className='sbar'>
              
                <ul className='list'>
                     {AdminScontent.map((val,key)=>{
                    return (
                        
                        <li key={key} 
                        
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname = val.link}}> 

                        <div id='icon'>
                            
                        {val.icon}
                        </div>


                          <div id='title'>
                              {val.title}
                          </div>

                          
                        </li> 
                    );
                     
                    })}
                </ul>

                <div className='logout'>
                <div>
                        {loading&&(
                            <button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Logging out</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                            <h5> <MdLogout id='logouticon' />
                    <button onClick={logoutSubmit} style={{border:'none', background:"transparent"}}>Logout</button></h5>
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AdminSidebar;