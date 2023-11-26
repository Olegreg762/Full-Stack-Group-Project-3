// import React, { useEffect } from "react"
// import { Link } from "react-router-dom"
// import auth from "../utils/auth"
// import { useQuery } from "@apollo/client";
// import { GET_LIBRARIES, QUERY_ONE_USER } from "../utils/queries";

// const HomePage =  () =>  {
//     const logout = (event) => {
//         event.preventDefault();
//         auth.logout();
//     };
//     const { email, username, _id } = auth.getProfile().data;

//     console.log( auth.loggedIn())

//     return (
        
//         <div>
//           <h1>Home Page!</h1>
//         {auth.loggedIn() ? (
//           <>
//             <span>Hey there, {username}! </span>
//             <button className="btn btn-lg btn-light m-2" onClick={logout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link className="btn btn-block btn-primary" to="/login">
//               Login
//             </Link>
//             <Link className="btn btn-block btn-primary" to="/signup">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     )
// }

// export default HomePage;


import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

const HomePage = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };

  const { username } = auth.getProfile().data;

  // useEffect(() => {
  //   if (!auth.loggedIn() || !auth.getToken()) {
  //     // Redirect to the login page if the user is not logged in or if the token is invalid
  //     navigate("/login");
  //   }
  // }, [navigate]);

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
    },[]);

  return (
    <div>
      <h1>Home Page!</h1>
      {auth.loggedIn() ? (
        <>
          <span>Hey there, {username}! </span>
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
  );
};

export default HomePage;