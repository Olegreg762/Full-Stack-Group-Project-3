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

<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to='/'><a class="nav-link active" aria-current="page">Home</a></Link>
      </li>
      <li class="nav-item">
        <Link to= 'profile'><a class="nav-link" >Profile</a></Link>
      </li>
      <li class="nav-item">
       <Link to='/libraries'> <a class="nav-link">Libraries</a></Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
};

export default Header;