import React, { useEffect } from "react";
import {BOOK_CHECKOUT, BOOK_RETURN} from "../utils/mutations";
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY_BOOKS, QUERY_USER } from "../utils/queries";
import { useParams } from "react-router-dom";
import auth from "../utils/auth"


const BookActions = ({bookId, userId, available, refetch}) => {
    const [checkoutBook] = useMutation(BOOK_CHECKOUT);
    const [returnBook] = useMutation(BOOK_RETURN);
    
    const {loading: userLoading, data: userData} =  useQuery(QUERY_USER, {
        variables: {id: userId}
    });

    

    useEffect(() => {
        if(!userLoading || userData) {
        }
    }, [userLoading, userData]);
    if(userLoading) return

    const checkedbooksArray = userData.user.checkedbooks
    const isin = checkedbooksArray.map((books) => {
        return{ 
            checkedId:books._id
        }
    });

    const userHasCheckedBook = isin.some(books => books.checkedId === bookId)

    const checkedOutOther = !available && !userHasCheckedBook

    console.log('userdata', userHasCheckedBook)
    const handleButtonClick = async () => {
        try {
            if(available) {
                const {data} = await checkoutBook({
                    variables: {
                        userId: userId,
                        bookId: bookId
                    }
                });
            } else {
                const {data} = await returnBook({
                    variables: {
                        userId: userId,
                        bookId: bookId
                    }
                });
            }
        } catch (error) {
            console.log('error')
        }
    }
    refetch()
    return (
        <button className="btn btn-lg btn-block btn-dark m-3" onClick={handleButtonClick} disabled={checkedOutOther}>
            {checkedOutOther ? "Currently Checked Out" : available ? "Check Out" : "Return"}
        </button>
    )
}
const LibraryPage = () => {

    const {_id} = (auth.getProfile().data)
    
    const {libraryId} = useParams();

    const {loading, data, refetch} =  useQuery(QUERY_LIBRARY_BOOKS, {
        variables: {id: libraryId}
    });

    useEffect(() => {
        if(!loading || data) {
        }
    }, [loading, data]);
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
                    refetch={refetch}
                    />
                </li>
            </ul>
        </div>
                ))
    
        return (
            <div className="bg-dark p-4">
            <div className="bg-dark text-white">
                <h1>Welcome to {data.library.libraryname}</h1>
                 <h3 className="m-0"> Books:</h3>
                <div className="fs-4">{libraryElements}</div>
            </div>
            </div>
        )
}

export default LibraryPage;