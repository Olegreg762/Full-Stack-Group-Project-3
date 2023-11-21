import React from "react"
import { Link } from "react-router-dom"
import auth from "../utils/auth"

const HomePage = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <h1>Home Page!</h1>,
        <div>
        {auth.loggedIn() ? (
          <>
            <span>Hey there, {auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-block btn-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-block btn-primary" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    )
}

export default HomePage;