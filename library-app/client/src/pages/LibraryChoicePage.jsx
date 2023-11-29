import React from "react"
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY } from "../utils/queries";
import { Link } from "react-router-dom";
import LibraryPage from "./LibraryPage";


const LibraryChoicePage = () => {


    const {loading: libraryLoading,data: libraryData} =  useQuery(QUERY_LIBRARY);
    
    if(libraryLoading) return <p></p>
    const libraryQueryData = libraryData
    console.log(libraryQueryData.libraries)
        
    const libraryElements = libraryQueryData.libraries.map((library) => (
        
        <Link key={library._id} to={`/libraries/${library._id}`} component={LibraryPage} className="library-card">
            <h2 className="m-0 text-center"><button className="btn btn-lg btn-block btn-dark m-3 fs-2">{library.libraryname}</button></h2>
        </Link>
    ))
        return (
            <div>
                <h1 className="bg-dark text-white m-0 text-center">Library Hub!</h1>
                <div className="bg-dark">{libraryElements}</div>
            </div>
    )
}

export default LibraryChoicePage;