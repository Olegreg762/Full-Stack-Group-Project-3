import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand">CLEO</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {auth.loggedIn() ?
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to='/' class="nav-link active" aria-current="page">Home</Link>
      </li>
      <li className="nav-item">
        <Link to='profile' className="nav-link"> Profile </Link>
      </li>
      <li className="nav-item">
       <Link to='/libraries' className="nav-link">Libraries</Link>
      </li>
    </ul>
    <>
          <button className="btn btn-m btn-light m-2 float-end" onClick={logout}>
            Logout
          </button>
        </>
  </div> : null}
</div>
</nav>
  );
};

export default Header;