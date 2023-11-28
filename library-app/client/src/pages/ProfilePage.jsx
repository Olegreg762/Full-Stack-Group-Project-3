import React from "react"
import logo from '../assets/image/profilePH.jpg'
import ProgressBar from "../components/ProgressBar"
import auth from "../utils/auth"
import { QUERY_ONE_USER } from "../utils/queries"
import { useQuery } from "@apollo/client"
import TeacherProfile from "../components/Profile/teacherProfile"
import StudentProfile from "../components/Profile/studentProfile"

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 }
]
// TODO: create teacher profile page with list of libraries that takes you to the library page
//TODO: refactor student profile page with user info,list of checked out books, books already read, and a progress bar showing how many books have been read with a goal of 30
const ProfilePage = () => {
    const {data, loading} = useQuery(QUERY_ONE_USER, {
        variables: {
            id: auth.getProfile().data._id
        }
    })

    const user = data?.user || {}
    if (loading){
        return (<h2>Loading...</h2>)
    } else {
        console.log(data)
    }
    return (
     
        <>
        {user.isteacher ? <TeacherProfile user={user}/> : <StudentProfile user={user}/> }</>

    )
}

export default ProfilePage;