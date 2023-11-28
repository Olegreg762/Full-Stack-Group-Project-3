import React from "react"
import { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import auth from '../utils/auth';
import {useMutation, useQuery} from '@apollo/client';
import { QUERY_LIBRARY, QUERY_LIBRARY_BOOKS } from "../utils/queries";
import { ADD_BOOK_DB, ADD_BOOK_LIBRARY } from "../utils/mutations";
import { Link } from "react-router-dom";
import { bookSearchById, bookSearchByName } from "../utils/bookSearch";

const BookAddPage = () => {
        
        const [searchedBooks, setSearchedBooks] = useState([]);
        const [searchInput, setSearchInput] = useState('');
      
        const [addBookToDB] = useMutation(ADD_BOOK_DB);
        const [addBookToLibrary] = useMutation(ADD_BOOK_LIBRARY);

        const userId = (auth.getProfile().data._id)
    
    
        const {loading, data, refetch} =  useQuery(QUERY_LIBRARY, {});
    
        useEffect(() => {
            if(!loading || data) {
            }
        }, [loading, data]);
        if(loading) return <p></p>;


        const UserlibraryData = data.libraries.find((library) => library.libraryowner._id === userId);
        console.log(UserlibraryData)
        
        const libraryid = UserlibraryData._id;

        const savedBookIds = UserlibraryData.books.map((libraryBooks) => libraryBooks.bookId)
    
      
        const handleFormSubmit = async (event) => {
          event.preventDefault();
      
          if (!searchInput) {
            return false;
          }
      
          try {
            const response = await bookSearchByName(searchInput);
            if (!response) {
              throw new Error('something went wrong!');
            }
      
            const Rawresponse = await response;

      
            const bookData = Rawresponse.map((book) => ({
              bookId: book.bookId,
              authors: [book.authors] || ['No author to display'],
              title: book.title,
              description: book.description,
              image: book.image || '',
            }));
      
            setSearchedBooks(bookData);
            setSearchInput('');
          } catch (err) {
            console.error(err);
          }
        };
      
        const handleSaveBook = async (bookId) => {
            
          const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
          const token = auth.loggedIn() ? auth.getToken() : null;
      
          if (!token) {
            return false;
          }
      
          try {
            const responseDBadd = await addBookToDB({
                variables: {
                    authors: bookToSave.authors.join(', '),
                    description: bookToSave.description,
                    title: bookToSave.title,
                    bookId: bookToSave.bookId,
                    image: bookToSave.image,
                    available: true
                }
            });

            const book_id = responseDBadd.data.addBookDB._id

            const responseLibraryAdd = await addBookToLibrary({
                variables: {
                    libraryId: libraryid,
                    bookId: book_id
                }
            });
            refetch()
            if (!responseDBadd || !responseLibraryAdd) {
              throw new Error(`something went wrong!, DBadd ${responseDBadd}, libraryAdd ${responseLibraryAdd}`);
            }
       
          } catch (err) {
            console.error(err);
          }
        };
      
    return (
        <>
          <div className="text-light bg-dark p-5">
            <Container>
              <h1>Search for Books!</h1>
              <Form onSubmit={handleFormSubmit}>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      name='searchInput'
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      type='text'
                      size='lg'
                      placeholder='Search for a book'
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Button type='submit' variant='success' size='lg'>
                      Submit Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
    
          <Container>
            <h2 className='pt-5'>
              {searchedBooks.length
                ? `Viewing ${searchedBooks.length} results:`
                : 'Search for a book to begin'}
            </h2>
            <Row>
              {searchedBooks.map((book) => {
                return (
                  <Col md="4" key={book.bookId}>
                    <Card border='dark'>
                      {book.image ? (
                        <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                      ) : null}
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <p className='small'>Authors: {book.authors}</p>
                        <Card.Text>{book.description}</Card.Text>
                        {auth.loggedIn() && (
                          <Button
                            disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                            className='btn-block btn-info'
                            onClick={() => handleSaveBook(book.bookId, refetch)}>
                            {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                              ? 'This book has already been saved!'
                              : 'Save this Book!'}
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      );
}

export default BookAddPage