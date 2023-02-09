import React from 'react';
import * as home from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Homepage.css'

function Homepage() {
  return (
    <div>
        <div className='homenav'>
            <home.Container className='pt-3'>
            <h5>
                Logo
                <Link to={'/Login'} className="btn btn-success btn-sm float-end">Login</Link>
            </h5>
            </home.Container>
        </div>
    </div>
  )
}

export default Homepage