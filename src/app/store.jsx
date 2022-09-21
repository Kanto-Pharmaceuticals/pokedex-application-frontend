import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../helpers/auth/auth-slice"
import pokemonReducer from "../helpers/pokemon/pokemon-slice"
import pokedexPokemonReducer from "../helpers/pokedex/pokedex-pokemon-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    caught: pokemonReducer,
    pokedex: pokedexPokemonReducer,
  },
})
