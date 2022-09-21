import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../helpers/auth/auth-slice"
import pokemonReducer from "../helpers/pokemon/pokemon-slice"
import pokedexPokemonReducer from "../helpers/pokedex/pokedex-pokemon-slice"
import uiReducer from "../helpers/ui/ui-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    caught: pokemonReducer,
    pokedex: pokedexPokemonReducer,
  },
})
