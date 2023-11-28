import ProgressBar from "../ProgressBar"
import React from "react";
const TeacherProfile = ({user}) => {
    
    return (
        <div className="bg-dark">
            <h1 className="text-center text-white">Profile Page!</h1>
            <div className="d-flex justify-content-around">
                <div className="profile-books border border-4 border-secondary p-5">
                    {/*Pulls completed book from the database and uses the google api to get info, plus pulls comments */}
                    {
                        user?.checkedbooks?.map((book) => (        
                        <div>
                            <ul>
                                <li key={book._id}>
                                    <p>{book.title}</p>
                                    <p>{book.authors}</p>
                                </li>
                            </ul>
                        </div>))
                    }

                </div>
                <div className="profile-goals">

                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className='dropdown-toggle dropdown-toggle-split m-2'
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                GOAL!
                            </button>

                            <div className='dropdown-menu'>
                                <a className='dropdown-item'> 1 </a>
                                <a className='dropdown-item'> 2 </a>
                                <a className='dropdown-item'> 3 </a>
                                <a className='dropdown-item'> 4 </a>
                                <a className='dropdown-item'> 5 </a>
                                <a className='dropdown-item'> 6 </a>
                                <a className='dropdown-item'> 7 </a>
                                <a className='dropdown-item'> 8 </a>
                                <a className='dropdown-item'> 9 </a>
                                <a className='dropdown-item'> 10 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default TeacherProfile;