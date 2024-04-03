import React from "react";
import { PokemonListProvider, PokemonList } from "./PokemonApp";

export default function PokemonComponent() {
  return (
    <div>
      <PokemonListProvider>
        <PokemonList />
      </PokemonListProvider>
    </div>
  );
}
