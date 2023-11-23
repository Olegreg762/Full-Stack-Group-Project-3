import React, { useEffect } from "react";
import {BOOK_CHECKOUT, BOOK_RETURN} from "../utils/mutations";
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY_BOOKS } from "../utils/queries";
import { useParams } from "react-router-dom";
import auth from "../utils/auth"


const BookActions = ({bookId, userId,available}) => {
    const [checkoutBook] = useMutation(BOOK_CHECKOUT);
    const [returnBook] = useMutation(BOOK_RETURN);

    const handleButtonClick = async () => {
        try {
            if(available) {
                const {data} = await checkoutBook({
                    variables: {
                        userId: userId,
                        bookId: bookId
                    }
                });
                console.log('data', data)
            } else {
                const {data} = await returnBook({
                    variables: {
                        userId: userId,
                        bookId: bookId
                    }
                });
                console.log('data', data)
            }
        } catch (error) {
            console.log('error')
        }
    }
    return (
        <button onClick={handleButtonClick}>
            {available ? "Check Out" : "Return"}
        </button>
    )
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
            <ul>
                <li key={book._id}>
                    {book.title}
                    <BookActions
                    bookId={book._id}
                    userId={_id}
                    available={book.available}
                    />
                </li>
            </ul>
        </div>
                ))
    
        return (
            <div>
                <h1>Welcome to {data.library.libraryname}</h1>
                 <h3> Books:</h3>
                <div>{libraryElements}</div>
            </div>
        )
}

export default LibraryPage;