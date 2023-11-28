import React from "react";
import ProgressBar from "../ProgressBar"
const StudentProfile = ({user}) => {
    // const handleButtonClick = async () => {
    //     try {
    //         if(available) {
    //             const {data} = await checkoutBook({
    //                 variables: {
    //                     userId: userId,
    //                     bookId: bookId
    //                 }
    //             });
    //         }}catch (error) {
    //             console.log('error')
    //         }
    //     }
    // }
    const bgcolor= "#6a1b9a"
    return (
        <div className="bg-dark">
            <h1 className="text-center text-white">Profile Page!</h1>
            <div className="d-flex justify-content-around">
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
                <div className="profile-goals">
                    {/* Goal svg to update percent}
                {Goals in number that auto increases when book is read */}
                    <h2 className="text-center text-white">30 Book Challenge Progress</h2>
                    <div className="profile-goal-svg border border-4 border-secondary p-5 d-flex justify-content-center p-5">
                        { user?.readBooks?.length ?
                            <ProgressBar bgcolor={bgcolor} completed={(user?.readBooks?.length/30)*100} />
                            :
                            <ProgressBar bgcolor={bgcolor} completed={0} />
                        }
                    </div>
                    <div className="profile-goal-defined">
                        {/* div to house goal in numbers */}
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
        </div>
    )
}

export default StudentProfile;