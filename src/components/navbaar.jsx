/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {Link} from 'react-router-dom';

const Navbaar=()=>{
 return(
  <header>
  <nav className="navbar navbar-expand-lg text-white p-3 fs-5 col-xm-12 fw-bold bg-warning">
  <div className="container-fluid text-white">
    <Link to={'/'} className="navbar-brand text-white" >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link to={'/Add'} className="nav-link text-white active" aria-current="page"  >Add Users</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

 )
}

export default Navbaar;
