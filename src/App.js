import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Admin
import Homepage from './Admin/Homepage/Homepage';
import AdminDashboard from './Admin/AdminDashboard/AdminDashboard';
import Login from './Admin/AdminLogin/Login';
import AdminVavbar from './Admin/AdminNavbar/AdminNavbar';
import AdminProfile from './Admin/AdminProfile/AdminProfile';
import AdminReports from './Admin/AdminReports/AdminReports';
import AdminSidebar from './Admin/AdminSidebar/AdminSidebar';
import AdminUsers from './Admin/AdminUsers/AdminUsers';
import AdminCustomerList from './Admin/AdminCustomerList/AdminCustomerList';
import AdminAddCustomer from './Admin/AdminCustomerList/AdminAddCustomer';
import AdminItemList from './Admin/AdminItemList/AdminItemList';
import AdminTransactions from './Admin/AdminTransactions/AdminTransactions';
import AdminNewUsers from './Admin/AdminUsers/AdminNewUsers';
import Logs from './Admin/Logs/Logs';
import Register from './Admin/Register/Register';


//Authorizer
import AuthDashboard from './Authorizer/AuthDashboard/AuthDashboard';
import AuthVavbar from './Authorizer/AuthNavbar/AuthNavbar';
import AuthProfile from './Authorizer/AuthProfile/AuthProfile';
import AuthReport from './Authorizer/AuthReport/AuthReport';
import AuthSidebar from './Authorizer/AuthSidebar/AuthSidebar';
import AuthCustomerList from './Authorizer/AuthCustomerList/AuthCustomerList';
import AuthItemList from './Authorizer/AuthItemList/AuthItemList';
import AuthTransaction from './Authorizer/AuthTransaction/AuthTransaction';
import AuthAddItem from './Authorizer/AuthItemList/AuthAddItem';



//Clerk
import ClerkDashboard from './Clerk/ClerkDashboard/ClerkDashboard';
import ClerkVavbar from './Clerk/ClerkNavbar/ClerkNavbar';
import ClerkProfile from './Clerk/ClerkProfile/ClerkProfile';
import ClerkReport from './Clerk/ClerkReport/ClerkReport';
import ClerkSidebar from './Clerk/ClerkSidebar/ClerkSidebar';
import CustomerList from './Clerk/CustomerList/CustomerList';
import ItemList from './Clerk/ItemList/ItemList';
import MakeSale from './Clerk/MakeSale/MakeSale';
import ClerkTransactions from './Clerk/ClerkTransactions/ClerkTransactions';
import AcceptReturns from './Clerk/AcceptReturns/AcceptReturns';
import Returns from './Clerk/AcceptReturns/Returns'

axios.defaults.baseURL ="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      
      <Router>
        <Routes>

          {/* Admin section */}
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/admindashboard' element={<AdminDashboard/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/adminnavbar' element={<AdminVavbar/>}></Route>
          <Route exact path='/adminprofile' element={<AdminProfile/>}></Route>
          <Route exact path='/adminreports' element={<AdminReports/>}></Route>
          <Route exact path='/adminsidebar' element={<AdminSidebar/>}></Route>
          <Route exact path='/adminusers' element={<AdminUsers/>}></Route>
          <Route exact path='/admincustomerlist' element={<AdminCustomerList/>}></Route>
          <Route exact path='/adminitemlist' element={<AdminItemList/>} ></Route>
          <Route exact path='/adminaddcustomer' element={<AdminAddCustomer />}></Route>
          <Route exact path='/admintransactions' element={<AdminTransactions />}></Route>
          <Route exact path='/adminnewusers' element={<AdminNewUsers />}></Route>
          <Route exact path='/logs' element={<Logs />}></Route>
          <Route exact path='/register' element={<Register />} ></Route>



          {/* Authorizer Section */}

          <Route exact path='/authdashboard' element={<AuthDashboard/>}></Route>
          <Route exact path='/authnavbar' element={<AuthVavbar/>}></Route>
          <Route exact path='/authprofile' element={<AuthProfile/>}></Route>
          <Route exact path='/authreport' element={<AuthReport/>}></Route>
          <Route exact path='/authsidebar' element={<AuthSidebar/>}></Route>
          <Route exact path='/authcustomerlist' element={<AuthCustomerList/>}></Route>
          <Route exact path='/authitemlist' element={<AuthItemList/>}></Route>
          <Route exact path='/authtransaction' element={<AuthTransaction/>}></Route>
          <Route exact path='/authadditem' element={<AuthAddItem />}></Route>



          {/* Clerk section */}

          <Route exact path='/Clerkdashboard' element={<ClerkDashboard/>}></Route>
          <Route exact path='/Clerknavbar' element={<ClerkVavbar/>}></Route>
          <Route exact path='/Clerkprofile' element={<ClerkProfile/>}></Route>
          <Route exact path='/Clerkreport' element={<ClerkReport/>}></Route>
          <Route exact path='/Clerksidebar' element={<ClerkSidebar/>}></Route>
          <Route exact path='/clerktransactions' element={<ClerkTransactions/>}></Route>
          <Route exact path='/customerlist' element={<CustomerList/>}></Route>
          <Route exact path='/itemlist' element={<ItemList/>}></Route>
          <Route exact path='/makesale' element={<MakeSale/>}></Route>
          <Route exact path='/acceptreturns' element={<AcceptReturns />}></Route>
          <Route exact path='/returns' element={<Returns />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
