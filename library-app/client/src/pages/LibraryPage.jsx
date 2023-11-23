import React, { useEffect } from "react";
import {BOOK_CHECKOUT, BOOK_RETURN} from "../utils/mutations";
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY_BOOKS } from "../utils/queries";
import { useParams } from "react-router-dom";
import auth from "../utils/auth"

function handleButtonClick(bookId, userId, bookAvailable){
    console.log(`
    bookid ${bookId}
    userid ${userId}
    bookAvailable ${bookAvailable}
    `)
}

const LibraryPage = () => {

    const {_id} = (auth.getProfile().data)

    const {libraryId} = useParams();

    const {loading, data} =  useQuery(QUERY_LIBRARY_BOOKS, {
        variables: {id: libraryId}
    });

    useEffect(() => {
        if(!loading || data) {
        }
    }, [loading, data]);
    console.log('data', data)
    if(loading) return <p></p>;

    const libraryElements = data.library.books.map((book) => (
        <div>
            <h3> Books:</h3>
            <ul>
                <li key={book._id}>
                    {book.title}
                    {book.available ? (
                        <button onClick={ () => handleButtonClick(book._id, _id, book.available)}>CheckOut</button>
                    ) : (
                        <button onClick={ () => handleButtonClick(book._id, _id, book.available)}>Return</button>  
                    )}
                </li>
            </ul>
        </div>
                ))
    
        return (
            <div>
                <h1>Welcome to {data.library.libraryname}</h1>
                <div>{libraryElements}</div>
            </div>
        )
}

export default LibraryPage;