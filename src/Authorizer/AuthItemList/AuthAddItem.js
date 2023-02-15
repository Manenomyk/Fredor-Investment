import React from 'react';
import './AuthItemList.css';
import AuthSidebar from '../AuthSidebar/AuthSidebar';
import * as authadd from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AuthAddItem() {
  return (
    <div>
        <AuthSidebar />
        


        <authadd.Container>
        <Link to={'../AuthItemList'} className='addcustomer btn btn-primary btn-sm float-end mt-3'>Back</Link >
              <authadd.Row>
              
                <authadd.Col className='mx-auto' lg={8}>
                  <authadd.Card className='additem mt-5'>
                    <authadd.Card.Title>
                      
                        <div className='edit'>Add new item</div>
                        
                    </authadd.Card.Title>
                    <authadd.Card.Body className='mx-auto'>
                        <div>

                           <label>Item description</label>
                           <input name='name' className='intem form-control shadow-none ' type="text" />
                          
                           <label>Item description</label>
                           <input name='name' className='intem form-control shadow-none ' type="text" />
                          
                           <label>Item description</label>
                           <input name='name' className='intem form-control shadow-none ' type="text" />
                          
                        
                        </div>
                    
                  
                      <div className='details2 d-flex mb-3'>
                            <button className='btn btn-success mt-3'>Add item</button>
                      </div>

                    </authadd.Card.Body>
                  </authadd.Card>
                </authadd.Col>
              </authadd.Row>
            </authadd.Container>

    </div>
  )
}

export default AuthAddItem