import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

const HomePage = () => {


  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };


  return (
    <div>
      <h1 className="bg-dark text-white p-5-5-5 text-center m-0">Welcome to the Catalog for Literary Exploration and Organization </h1>
      <h3 className="bg-dark text-white m-0 text-center">or C.L.E.O. for short!</h3>
       {auth.loggedIn() || auth.getToken() ? (
        <>
        </>
      ) : (
        <>
        <div className="bg-dark text-center">
          <Link className="btn btn-lg btn-block btn-dark m-3" to="/login">
            Login
          </Link>
          <Link className="btn btn-lg btn-block btn-dark m-3" to="/signup">
            Signup
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;