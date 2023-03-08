import React from 'react';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import './ItemList.css';
import * as list from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css';

function ItemList() {
  return (
    <div>
      <ClerkSidebar />

      <list.Container>
        <list.Row>
          <list.Col className='mt-3' lg={12}>
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
          </list.Col>
        </list.Row>
      </list.Container>
      
    </div>
  )
}

export default ItemList