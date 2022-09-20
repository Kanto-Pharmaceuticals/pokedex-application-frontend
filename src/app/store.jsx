import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/auth-slice"
import pokemonReducer from "../features/pokemon/pokemon-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pokemon: pokemonReducer,
  },
})
