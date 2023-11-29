import React from "react"
import BookAddPage from "./BookAddPage";
import LibraryChoicePage from "./LibraryChoicePage";
import auth from "../utils/auth"

const LibraryHub = () => {
    const isUserTeacher  = auth.getProfile().data.isteacher;
    console.log(auth.getProfile())
        return (
            <div>
                {isUserTeacher ? <BookAddPage/> : <LibraryChoicePage/>}
            </div>
    )
}

export default LibraryHub;