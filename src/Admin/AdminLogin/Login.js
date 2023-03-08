import React from 'react';
import * as log from 'react-bootstrap';
import './Login.css'

function Login() {
  return (
    <div>
      <log.Container className='logContainer'>
        <log.Row >
          <log.Col className=' mx-auto' lg={5}>
            <log.Card className='logcard '>
              <log.Card.Title className='mx-auto mt-5 mb-5'>
                Logo
              </log.Card.Title>
              <log.Card.Body>
                <span >Email</span>
                <input type="text" className='form-control shadow-none mb-4' />
                <span>Password</span>
                <input type="password" className='form-control shadow-none mb-4' />


                
                <div className='logbtn'>
                  <button className='logbtn btn btn-success'>Login</button>
                </div>
                 
              </log.Card.Body>
            </log.Card>
            
          </log.Col>
        </log.Row>
      </log.Container>
    </div>
  )
}

export default Login