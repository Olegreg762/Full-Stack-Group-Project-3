import React from "react"
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY } from "../utils/queries";
import { Link } from "react-router-dom";
import LibraryPage from "./LibraryPage";


const LibraryHub = () => {


    const {loading: libraryLoading,data: libraryData} =  useQuery(QUERY_LIBRARY);
    
    if(libraryLoading) return <p></p>
    const libraryQueryData = libraryData
    console.log(libraryQueryData.libraries)
        
    const libraryElements = libraryQueryData.libraries.map((library) => (
        
        <Link key={library._id} to={`/libraries/${library._id}`} component={LibraryPage} className="library-card">
            <h2><button>{library.libraryname}</button></h2>
        </Link>
    ))
        return (
            <div>
                <h1>Library Hub!</h1>
                <div>{libraryElements}</div>
            </div>
    )
}

export default LibraryHub;