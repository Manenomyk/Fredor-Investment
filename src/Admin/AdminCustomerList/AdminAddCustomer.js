import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminadd from 'react-bootstrap';
import './AdminCustomerList.css';
import { Link } from 'react-router-dom';


function AdminAddCustomer() {
  return (
    <div>
        <AdminSidebar />

        <adminadd.Container className='addcustcontainer'>
        <Link to={'../AdminCustomerList'} className="btn btn-primary btn-sm float-end mt-3">Back</Link>
        
            <adminadd.Row>
                
                <adminadd.Col lg={8} className="mx-auto">

                    <adminadd.Card className='addcard'>
                        <adminadd.Card.Header>
                            Logo
                        </adminadd.Card.Header>
                        <adminadd.Card.Body>
                           <div className='details1 d-flex mb-3'>
                                <div>
                                    <label>Plate name</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                                <div>
                                    <label>Plate Code </label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                           </div>
                           <div className='details2 d-flex mb-3'>
                                <div>
                                    <label>Driver</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                                <div>
                                    <label>ID No.</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                           </div>
                           <div className='details2 d-flex mb-3'>
                                <div>
                                    <label>Phone number</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                                <div>
                                    <label>Company</label>
                                    <input type="text" className='form-control shadow-none' />
                                </div>
                           </div>
                           <div className='details2 d-flex mb-3'>
                                <button className='btn btn-success'>Add customer</button>
                           </div>
                        </adminadd.Card.Body>
                    </adminadd.Card>
                </adminadd.Col>
            </adminadd.Row>
        </adminadd.Container>
    </div>
  )
}

export default AdminAddCustomer