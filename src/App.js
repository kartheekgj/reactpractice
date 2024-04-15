import React from "react";
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
    {
      link: "/todo",
      pageName: "To Do App",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-2">
        {routesObj.map((routeObj, key) => (
          <NavLink
          key={key}
            to={routeObj.link}
            className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : "text-black-500"
            }
          >
            {routeObj.pageName}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <section className="text-gray-600 body-font">
          <div className="bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
            <div className="mx-8 my-8 bg-white p-8 rounded-lg shadow-xl">
              <h3 className="p-4 mx-auto">Applicaiton</h3>
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
