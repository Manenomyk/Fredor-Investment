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


//Authorizer
import AuthDashboard from './Authorizer/AuthDashboard/AuthDashboard';
import AuthVavbar from './Authorizer/AuthNavbar/AuthNavbar';
import AuthProfile from './Authorizer/AuthProfile/AuthProfile';
import AuthReport from './Authorizer/AuthReport/AuthReport';
import AuthSidebar from './Authorizer/AuthSidebar/AuthSidebar';
import AuthCustomerList from './Authorizer/AuthCustomerList/AuthCustomerList';
import AuthItemList from './Authorizer/AuthItemList/AuthItemList';
// import Transactions from './Authorizer/Transactions/Transactions';



//Clerk
import ClerkDashboard from './Clerk/ClerkDashboard/ClerkDashboard';
import ClerkVavbar from './Clerk/ClerkNavbar/ClerkNavbar';
import ClerkProfile from './Clerk/ClerkProfile/ClerkProfile';
import ClerkReport from './Clerk/ClerkReport/ClerkReport';
import ClerkSidebar from './Clerk/ClerkSidebar/ClerkSidebar';
import CustomerList from './Clerk/CustomerList/CustomerList';
import ItemList from './Clerk/ItemList/ItemList';
import MakeSale from './Clerk/MakeSale/MakeSale';
import Transactions from './Clerk/Transactions/Transactions';

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



          {/* Authorizer Section */}

          <Route exact path='/authdashboard' element={<AuthDashboard/>}></Route>
          <Route exact path='/authnavbar' element={<AuthVavbar/>}></Route>
          <Route exact path='/authprofile' element={<AuthProfile/>}></Route>
          <Route exact path='/authreport' element={<AuthReport/>}></Route>
          <Route exact path='/authsidebar' element={<AuthSidebar/>}></Route>
          <Route exact path='/authcustomerlist' element={<AuthCustomerList/>}></Route>
          <Route exact path='/authitemlist' element={<AuthItemList/>}></Route>
          {/* <Route exact path='/transaction' element={<Transactions/>}></Route> */}



          {/* Clerk section */}

          <Route exact path='/Clerkdashboard' element={<ClerkDashboard/>}></Route>
          <Route exact path='/Clerknavbar' element={<ClerkVavbar/>}></Route>
          <Route exact path='/Clerkprofile' element={<ClerkProfile/>}></Route>
          <Route exact path='/Clerkreport' element={<ClerkReport/>}></Route>
          <Route exact path='/Clerksidebar' element={<ClerkSidebar/>}></Route>
          <Route exact path='/transactions' element={<Transactions/>}></Route>
          <Route exact path='/customerlist' element={<CustomerList/>}></Route>
          <Route exact path='/itemlist' element={<ItemList/>}></Route>
          <Route exact path='/makesale' element={<MakeSale/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
