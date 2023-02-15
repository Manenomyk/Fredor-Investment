import React from 'react';
import './AcceptReturns.css';
import ClerkSidebar from '../ClerkSidebar/ClerkSidebar';
import * as returns from 'react-bootstrap';

function Returns() {
  return (
    <div>
        <ClerkSidebar />

        <returns.Container>
        <returns.Row>
          <returns.Col className='mt-3' lg={12}>
          <table className="table">
              <thead className="tablehead">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Item description</th>
                  <th scope="col">Regular Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Maize - 90kg bag</td>
                  <td>5000</td>
                  <td>10</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Soya - 90kg bag</td>
                  <td>15200</td>
                  <td>15800</td>
                  <td>15800</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sura kg</td>
                  <td>140</td>
                  <td>155</td>
                  <td>15800</td>
                </tr>
              </tbody>
            </table>

          </returns.Col>
        </returns.Row>
      </returns.Container>
    </div>
  )
}

export default Returns