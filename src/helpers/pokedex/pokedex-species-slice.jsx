/**
 * pokedex-pokemon-slice.jsx
 * Defines the state slice of the pokedex > pokemon section.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pokedexPokemonService from "./pokedex-species-service"

// sets the initial state on load
const initialState = {
  species: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// retrieves all of the pokemon in the self-hosted PokeAPI database
export const retrievePokemon = createAsyncThunk(
  "pokedex/getAllPokemon",
  async (_, thunkAPI) => {
    try {
      return await pokedexPokemonService.retrievePokemon()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// create the slice and reduce it based on case
export const pokedexPokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(retrievePokemon.pending, state => {
        state.isLoading = true
      })
      .addCase(retrievePokemon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.species = action.payload
      })
      .addCase(retrievePokemon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.species = null
      })
  },
})

// export the reset function (IT DOES NOT WORK, USE AUTHSLICE RESET INSTEAD)
export const { reset } = pokedexPokemonSlice.actions
// export the reducer
export default pokedexPokemonSlice.reducer
