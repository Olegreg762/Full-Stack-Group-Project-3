import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

const Header = () => {

  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {auth.loggedIn() ?
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to='/'><a class="nav-link active" aria-current="page">Home</a></Link>
      </li>
      <li className="nav-item">
        <Link to='profile' className="nav-link"> Profile </Link>
      </li>
      <li className="nav-item">
       <Link to='/libraries' className="nav-link">Libraries</Link>
      </li>
    </ul>
  </div> : null}
</div>
</nav>
  );
};

export default Header;