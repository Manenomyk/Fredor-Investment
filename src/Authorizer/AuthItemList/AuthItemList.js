import React from 'react';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import './AuthItemList.css';
import * as authlist from 'react-bootstrap';

function AuthItemList() {
  return (
    <div>
        <AuthSidebar />

        <authlist.Container>
        <authlist.Row>
          <authlist.Col className='mt-3' lg={12}>
          <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item description</th>
                  <th scope="col">Buying price</th>
                  <th scope="col">Selling price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  <td>5000</td>
                  <td>5800</td>
                  <td><button className='btn btn-danger btn-sm'>Edit</button></td>
                  <td><button className='btn btn-success btn-sm'>Save</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  <td>15200</td>
                  <td>15800</td>
                  <td><button className='btn btn-danger btn-sm'>Edit</button></td>
                  <td><button className='btn btn-success btn-sm'>Save</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sura kg</td>
                  <td>140</td>
                  <td>155</td>
                  <td><button className='btn btn-danger btn-sm'>Edit</button></td>
                  <td><button className='btn btn-success btn-sm'>Save</button></td>
                </tr>
              </tbody>
            </table>
          </authlist.Col>
        </authlist.Row>
      </authlist.Container>
    </div>
  )
}

export default AuthItemList