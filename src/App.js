import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";


function App() {
  const routesObj = [
    {
      link: "/",
      pageName: "Home Page",
    },
    {
      link: "/counterapp",
      pageName: "Counter App",
    },
    {
      link: "/inputref",
      pageName: "Input Reference Test",
    },
    {
      link: "/pokemonapp",
      pageName: "Pokemon App",
    },
    {
      link: "/dynamicforms",
      pageName: "Dynamic Forms",
    },
    {
      link: "/moviesapp",
      pageName: "Movies App",
    },
    {
      link: "/gridselect",
      pageName: "Grid Select App",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-2">
      {routesObj.map((routeObj) => (
        <NavLink to={routeObj.link} className={({isActive})=> isActive ? "text-red-700": "text-black-500" }>{routeObj.pageName}</NavLink>
      ))}
      </div>
      <div className="flex flex-col gap-2">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
