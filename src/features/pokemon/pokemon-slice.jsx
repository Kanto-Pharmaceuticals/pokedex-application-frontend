import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pokemonService from "./pokemon-service"

const initialState = {
  pokemon: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// creates new pokemon
export const createPokemon = createAsyncThunk(
  "pokemon/create",
  async (pokemonData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.trainer.token
      return await pokemonService.createPokemon(pokemonData, token)
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

// get trainer's pokemon
export const getPokemon = createAsyncThunk(
  "pokemon/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.trainer.token
      return await pokemonService.getPokemon(token)
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

// deletes a pokemon
export const deletePokemon = createAsyncThunk(
  "pokemon/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.trainer.token
      return await pokemonService.deletePokemon(id, token)
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

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createPokemon.pending, state => {
        state.isLoading = true
      })
      .addCase(createPokemon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pokemon.push(action.payload)
      })
      .addCase(createPokemon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPokemon.pending, state => {
        state.isLoading = true
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pokemon = action.payload
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePokemon.pending, state => {
        state.isLoading = true
      })
      .addCase(deletePokemon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pokemon = state.pokemon.filter(
          pokemon => pokemon._id !== action.payload.id
        )
      })
      .addCase(deletePokemon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = pokemonSlice.actions
export default pokemonSlice.reducer
