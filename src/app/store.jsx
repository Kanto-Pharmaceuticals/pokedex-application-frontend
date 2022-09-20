import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/auth-slice"
import pokemonReducer from "../features/pokemon/pokemon-slice"
import pokedexPokemonReducer from "../features/pokedex/pokedex-pokemon-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    caught: pokemonReducer,
    pokedex: pokedexPokemonReducer,
  },
})
