import React from "react"

const ProfilePage = () => {
    return (
        <div>
            <h1>Profile Page!</h1>
            <div className="profile-info">
                {/* Shows profile picture and has info about profile such as name grade and favorite subject*/}
            </div>,
            <div className="profile-books">
                {/*Pulls completed book from the database and uses the google api to get info, plus pulls comments */}
            </div>,
            <div className="profile-goals">
                {/* Goal svg to update percent}
                {Goals in number that auto increases when book is read */}
                <div className="profile-goal-svg">
                    {/* div to show % svg */}
                </div>
                <div className="profile-goal-defined">
                    {/* div to house goal in numbers */}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;