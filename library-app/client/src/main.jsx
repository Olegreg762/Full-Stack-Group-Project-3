import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import LibraryHub from './pages/LibraryHub.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter(
  [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
      element: <HomePage />
    }, {
      path: '/profile',
      element: <ProfilePage />
    }, {
      path: '/libraries',
      element: <LibraryHub />
    }, {
      path: '/library/:libraryId',
      element: <LibraryPage />
    }, {
      path: '/login',
      element: <LoginPage />
    }, {
      path: '/signup',
      element: <SignupPage />
    }
    ]
  }
]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
