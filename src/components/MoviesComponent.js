import React, { useEffect, useState } from "react";

function useMoviesData() {
  const [moviesData, setMoviesData] = useState({});
  const [search, setSearchValue] = useState('');
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=" + search + "&apikey=713b1a6b", {
      method: "GET",
      cors: true,
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.Search){
          setMoviesData(data.Search);
        }else {
          setMoviesData({});
        }
      });
  }, [search]);
  return { moviesData, search, setSearchValue };
}

export function MoviesList() {
  const { moviesData, search, setSearchValue } = useMoviesData();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Moives List
        </h2>
        <SearchBox search={search} setSearchValue={setSearchValue}/>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {moviesData.length > 0 &&
            moviesData.map((movie) => (
              <div key={movie.imdbID} className="group relative">
                <div className="aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    className="object-cover object-center w-full h-30"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <h3 className="text-sm text-gray-700">
                    <a href={movie.imdbID}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.Title}
                    </a>
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    Year: {movie.Year}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function SearchBox(props) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search Movies"
        value={props.search}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}
