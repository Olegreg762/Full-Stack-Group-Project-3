import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  return (
    // <header className="header">
    //   <div className="">
    //   <Link to="/profile"><button className="btn" >
    //       Profile
    //    </button></Link>
    //    <Link to= "/libraries"><button className="btn" >
    //       Libraries
    //    </button>
    //    </Link>
    //   </div>
    // </header>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/' className="nav-link active" aria-current="page"> Home </Link>
      </li>
      <li className="nav-item">
        <Link to='profile' className="nav-link"> Profile </Link>
      </li>
      <li className="nav-item">
       <Link to='/libraries' className="nav-link">Libraries</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
};

export default Header;