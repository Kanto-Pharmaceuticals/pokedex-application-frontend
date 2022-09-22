import { configureStore, combineReducers } from "@reduxjs/toolkit"
import authReducer from "../helpers/auth/auth-slice"
import pokemonReducer from "../helpers/pokemon/pokemon-slice"
import pokedexSpeciesReducer from "../helpers/pokedex/pokedex-slice"
import uiReducer from "../helpers/ui/ui-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    caught: pokemonReducer,
    pokedex: pokedexSpeciesReducer,
  },
})
