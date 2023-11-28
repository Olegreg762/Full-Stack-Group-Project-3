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
                <div className="profile-books border border-4 border-secondary p-5">
                    <h2 className="text-center text-white">My Checked Out Books</h2>
                    {/*Pulls completed book from the database and uses the google api to get info, plus pulls comments */}
                    { user?.checkedbooks.length ?
                        user?.checkedbooks?.map((book) => (        
                        <div>
                            <ul>
                                <li key={book._id}>
                                    <p>{book.title}</p>
                                    <p>{book.authors}</p>
                                </li>
                            </ul>
                        </div>)) :
                        <p className="text-center text-white">No Books Checked Out Yet!</p>
                    }

                </div>
                </div>
            </div>
       
    )
}

export default TeacherProfile;