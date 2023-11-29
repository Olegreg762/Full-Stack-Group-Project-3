import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';



const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them

    //Add if statement to navigate to the login page, and have a sign up button if token is not found

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

//   const client = new ApolloClient({
//     // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

function App() {
  return (
    
    <ApolloProvider client={client} >
        <Header />
        <Outlet />
        <Footer />
    </ApolloProvider>
    )
  }

export default App
