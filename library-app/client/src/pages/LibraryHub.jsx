import React from "react"
import BookAddPage from "./BookAddPage";
import LibraryChoicePage from "./LibraryChoicePage";


const LibraryHub = () => {
    const profileData = JSON.parse(localStorage.getItem('user_data'));
    const isUserTeacher = profileData.user.isteacher;
        return (
            <div>
                {isUserTeacher ? <BookAddPage/> : <LibraryChoicePage/>}
            </div>
    )
}

export default LibraryHub;