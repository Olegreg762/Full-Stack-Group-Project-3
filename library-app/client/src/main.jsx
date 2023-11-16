import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowswerRouter, RouterProvider } from "react-router-dom";

const router = createBrowswerRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
      element: <LoginPage />
    }, {
      path: '/profiles/:profileId',
      element: <Profile />
    }, {
      path: '/libraries',
      element: <LibraryHub />
    }, {
      path: '/library/:libraryId',
      element: <LibraryPage />
    }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
