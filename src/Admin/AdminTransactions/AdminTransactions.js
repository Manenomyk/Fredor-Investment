import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admintrans from 'react-bootstrap';
import './AdminTransactions.css';

function AdminTransactions() {
  return (
    <div>
        <AdminSidebar />

        <admintrans.Container>
            
            <admintrans.Row>
                <div className='inputsearch'>
                    <input type="search" className=' transearch form-control shadow-none mt-3'/>
                </div>
                <admintrans.Col lg={12} className="mt-2">
                <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Mpesa Code</th>
        
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  
                </tr>
              </tbody>
            </table>
                </admintrans.Col>
            </admintrans.Row>
        </admintrans.Container>
    </div>
  )
}

export default AdminTransactions