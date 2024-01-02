import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './views/home';
import ChatPage from './views/chat';
import ProfilePage from './views/profile';
import ContactPage from './views/contact';
import ErrorPage from './views/error';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
