import React, {useEffect, useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminItemList.css';
import * as adminlist from 'react-bootstrap';
import axios from 'axios';

function AdminItemList() {
  const [items, setitems] = useState([]);
  useEffect(() => {
   axios.get(`api/adminViewitems`).then(res=>{
    console.log(res.data.viewitems);
    if(res.status === 200)
    {
      setitems(res.data.viewitems)
    }
   });
  }, []);
  return (
    <div>
        <AdminSidebar />


        <adminlist.Container>
        <adminlist.Row>
          <adminlist.Col className='mt-3' lg={12}>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  <td>5000</td>
                  <td>5800</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  <td>15200</td>
                  <td>15800</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sura kg</td>
                  <td>140</td>
                  <td>155</td>
                </tr>
              </tbody>
            </table>
          </adminlist.Col>
        </adminlist.Row>
      </adminlist.Container>
    </div>
  )
}

export default AdminItemList