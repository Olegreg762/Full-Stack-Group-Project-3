import React from "react"
import {useQuery} from '@apollo/client';
import { QUERY_LIBRARY } from "../utils/queries";
import {BOOK_CHECKOUT} from "../utils/mutations";

const handleButtonClick = (bookid, available) => {
    if(available){
        
        console.log(`checked out ${bookid}`)
    } else {
        
        console.log(`returned ${bookid}`)
    }
}

const LibraryHub = () => {


    const {loading: libraryLoading,data: libraryData} =  useQuery(QUERY_LIBRARY);
    
    if(libraryLoading) return <p></p>
    const libraryQueryData = libraryData
    console.log(libraryQueryData.libraries)
        
    const libraryElements = libraryQueryData.libraries.map((library) => (
        
        <div key={library._id} className="library-card">
            <h2>{library.libraryname}</h2>
            <h3> Books:</h3>
            <ul>
                {library.books.map((book) => (
                <li key={book._id}>
                    {book.title}
                    {book.available ? (
                        <button onClick={ () => handleButtonClick(book._id, book.available)}>CheckOut</button>
                    ) : (
                        <button onClick={ () => handleButtonClick(book._id, book.available)}>Return</button>  
                    )}
                </li>
                ))}
            </ul>
        </div>
    ))
        return (
            <div>
                <h1>Library Hub!</h1>
                <div>{libraryElements}</div>
            </div>
    )
}

export default LibraryHub;