import React from 'react';
import './AuthTransaction.css';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import * as authtrans from 'react-bootstrap'

function AuthTransaction() {
  return (
    <div>
        <AuthSidebar />

        <authtrans.Container>
            
            <authtrans.Row>
                <div className='inputsearch'>
                    <input type="search" placeholder='Search...' className=' transearch form-control shadow-none mt-3'/>
                    <button className='btn btn-primary search'>Search</button>
                </div>
                <authtrans.Col lg={12} className="mt-2">
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
                </authtrans.Col>
            </authtrans.Row>
        </authtrans.Container>
    </div>
  )
}

export default AuthTransaction