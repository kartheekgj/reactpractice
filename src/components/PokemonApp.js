import React, {
  useEffect,
  useContext,
  createContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

const PokemonContext = createContext([]);

function usePokemon() {
    return useContext(PokemonContext);
  }

function usePokemonData() {
  const [{ pokemon, search }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setPokemon":
          return { ...state, pokemon: action.payload };
        case "setSearch": {
          const result = { ...state, search: action.payload };
          return result;
        }
        default:
          return state;
      }
    },
    {
      pokemon: [],
      search: "",
    }
  );
  useEffect(() => {
    fetch("/pokemon.json", { method: "GET" })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setPokemon",
          payload: data,
        })
      );
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) => p.name.includes(search)).slice(0,20),
    [pokemon, search]
  );
//   const sortedPokemon = useMemo(
//     () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
//     [filteredPokemon]
//   );
  const setSearch = useCallback((search) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);
  return { pokemon: filteredPokemon, search, setSearch };
}

export function PokemonList() {
  const { pokemon } = usePokemon();
  
  return (
 
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Pokemon List
        </h2>
        <SearchBox />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pokemon.map((movie) => (
            <div key={movie.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${movie.id}.png`}
                  alt=""
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={movie.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Attack: {movie.special_attack}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Defense: {movie.special_defense}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const PokemonListProvider = ({ children }) => {
  return (
    <PokemonContext.Provider value={usePokemonData()}>
      {children}
    </PokemonContext.Provider>
  );
};

const SearchBox = () => {
  const { search, setSearch } = usePokemon();
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
