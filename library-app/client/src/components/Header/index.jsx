import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };
  return (

<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
<div className="container-fluid">
  <a className="navbar-brand text-white">C.L.E.O.</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {auth.loggedIn() ?
  <div class="collapse navbar-collapse justify-content-right" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item p-2">
        <Link to='/' class="nav-link active text-white" aria-current="page">Home</Link>
      </li>
      <li className="nav-item p-2">
        <Link to='profile' className="nav-link text-white"> Profile </Link>
      </li>
      <li className="nav-item p-2">
       <Link to='/libraries' className="nav-link text-white">Libraries</Link>
      </li>
    </ul>
    <>
          <button className="btn btn-m btn-dark m-4 " onClick={logout}>
            Logout
          </button>
        </>
  </div> : null}
</div>
</nav>
  );
};

export default Header;