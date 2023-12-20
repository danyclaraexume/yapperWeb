import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './views/home';
import ErrorPage from './views/error';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
