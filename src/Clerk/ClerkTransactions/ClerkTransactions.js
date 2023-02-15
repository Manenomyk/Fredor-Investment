import React from 'react';
import './ClerkTransactions.css';
import * as clerktrans from 'react-bootstrap';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';

function ClerkTransactions() {
  return (
    <div>
        <ClerkSidebar />


        <clerktrans.Container>
            
            <clerktrans.Row>
                <div className='inputsearch'>
                    <input type="search" className=' transearch form-control shadow-none mt-3'/>
                </div>
                <clerktrans.Col lg={12} className="mt-2">
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
                </clerktrans.Col>
            </clerktrans.Row>
        </clerktrans.Container>
    </div>
  )
}

export default ClerkTransactions