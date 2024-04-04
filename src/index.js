import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import CounterApp from "./components/CounterApp";
import PokemonComponent from "./components/PokemonComponent";
import InputRefComponent from "./components/InputRefApp";
import NotFoundPage from "./components/NotFoundPage";
import DynamicForms from "./components/dynamicformsApp";
import MoviesApp from "./components/MoviesApp";
import GridSelectApp from "./components/GridSelectApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/counterapp",
        element: <CounterApp />,
      },
      {
        path: "/inputref",
        element: <InputRefComponent />,
      },
      {
        path: "/pokemonapp",
        element: <PokemonComponent />,
      },
      {
        path: "/dynamicforms",
        element: <DynamicForms />,
      },
      {
        path: "/moviesapp",
        element: <MoviesApp />,
      },{
        path: "/gridselect",
        element: <GridSelectApp />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
