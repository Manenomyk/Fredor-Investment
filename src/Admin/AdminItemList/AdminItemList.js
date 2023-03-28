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
                {items.map((item, index)=>[
                  <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.description}</td>
                  <td>{item.b_price}</td>
                  <td>{item.s_price}</td>
                </tr>
                ])}
                

              </tbody>
            </table>
          </adminlist.Col>
        </adminlist.Row>
      </adminlist.Container>
    </div>
  )
}

export default AdminItemList