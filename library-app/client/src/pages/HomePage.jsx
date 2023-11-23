// import React, { useEffect } from "react"
// import { Link } from "react-router-dom"
// import auth from "../utils/auth"
// import { useQuery } from "@apollo/client";
// import { GET_LIBRARIES, QUERY_ONE_USER } from "../utils/queries";

// const HomePage = async () =>  {
//     const logout = (event) => {
//         event.preventDefault();
//         auth.logout();
//     };
//     const { email, username, _id } = auth.getProfile().data;
//   const { loading, error, data } = useQuery(GET_LIBRARIES);
//   console.log(_id)
//   const userData = await useQuery(QUERY_ONE_USER, {variables: {id: `${_id}` }}).data

//   useEffect(() => {
//     if (error) {
//       // Handle error state
//       console.log("Error fetching libraries:", error);
//     }
//   }, [error]);

//   if (loading) {
//     // Handle loading state
//     return <div>Loading...</div>;
//   }

  
//   const libraryData = data;
//   console.log(libraryData)
//   console.log(userData)
//   const userLibrary = libraryData && Array.isArray(libraryData)
//   ? libraryData.filter((lib) => lib.libraryowner._id === _id)
//   : [];

//     return (
        
//         <div>
//           <h1>Home Page!</h1>
//         {auth.loggedIn() ? (
//           <>
//             <span>Hey there, {userData?.data?.username}! </span>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { useQuery, useApolloClient } from "@apollo/client";
import { GET_LIBRARIES, QUERY_ONE_USER } from "../utils/queries";

const HomePage = () => {
  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };

  const { email, username, _id } = auth.getProfile().data;
  const { loading, error, data } = useQuery(GET_LIBRARIES);
  const [userData, setUserData] = useState(null);
  const client = useApolloClient();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await client.query({
          query: QUERY_ONE_USER,
          variables: { id: `${_id}` },
        });
        setUserData(data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [client, _id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const libraryData = data;
  console.log(libraryData);
  console.log(userData);
  const userLibrary =
    libraryData && Array.isArray(libraryData)
      ? libraryData.filter((lib) => lib.libraryowner._id === _id)
      : [];

  return (
    <div>
      <h1>Home Page!</h1>
      {auth.loggedIn() ? (
        <>
          <span>Hey there, {userData?.username}! </span>
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