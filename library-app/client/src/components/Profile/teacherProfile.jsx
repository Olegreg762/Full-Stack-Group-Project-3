import ProgressBar from "../ProgressBar"
import React from "react";
import { GET_LIBRARIES } from "../../utils/queries"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom";
import LibraryPage from "../../pages/LibraryPage";
const TeacherProfile = ({user}) => {
    const {data, loading} = useQuery(GET_LIBRARIES, )

    const libraries = data?.libraries?.filter((library) => library.libraryowner.username === user.username)|| [];
 
    // let userLibrary = libraries?.filter((library) => library.libraryowner.username === user.username) || {}


    if (loading) return (<h2>Loading...</h2>)
        
    
        
        console.log(libraries)

    return (
        <div className="bg-dark">
            <h1 className="text-center text-white">Profile Page!</h1>
            <div className="d-flex justify-content-around">
                <div className="profile-books border border-4 border-secondary p-5">
                    {/*Pulls completed book from the database and uses the google api to get info, plus pulls comments */}
                    {libraries.length ?libraries.map((library) => 
                    <Link key={library._id} to={`/libraries/${library._id}`} component={LibraryPage} className="btn">
            <h2><button>{library.libraryname}</button></h2>
        </Link>) : <h2 className="text-center text-white">No libraries created yet! </h2>}

                </div>
                </div>
            </div>
       
    )
}

export default TeacherProfile;