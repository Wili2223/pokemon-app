import React from 'react'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from './pages/ErrorPage';
import PokemonDetail from './pages/PokemonDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
     },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },

  ]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
