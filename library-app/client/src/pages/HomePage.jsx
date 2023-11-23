import React, { useReducer } from "react"
import { Link } from "react-router-dom"
import auth from "../utils/auth"

const HomePage = () => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };
    const [state, dispatch] = useReducer()
  const {email, username, _id} = (auth.getProfile().data)
    return (
        <h1>Home Page!</h1>,
        <div>
        {auth.loggedIn() ? (
          <>
            <span>Hey there, {username}!</span>
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