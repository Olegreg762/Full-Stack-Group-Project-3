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

const router = createBrowserRouter(
  [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
      element: <LoginPage />
    }, {
      path: '/profile',
      element: <ProfilePage />
    }, {
      path: '/libraries',
      element: <LibraryHub />
    }, {
      path: '/library/:libraryId',
      element: <LibraryPage />
    }
    ]
  }
]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
