/**
 * pokedex-pokemon-slice.jsx
 * Defines the state slice of the Pokedex slice which defines all items,
 * beries, moves, species, regions, and more.  Data is retrieved from
 * localStorage first.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pokedexService from "./pokedex-service"

// gets the arrays from localStorage if they exist
const berries = JSON.parse(localStorage.getItem("berries"))
const pokedexes = JSON.parse(localStorage.getItem("pokedexes"))
const versions = JSON.parse(localStorage.getItem("versions"))
const items = JSON.parse(localStorage.getItem("items"))
const locations = JSON.parse(localStorage.getItem("locations"))
const regions = JSON.parse(localStorage.getItem("regions"))
const moves = JSON.parse(localStorage.getItem("moves"))
const species = JSON.parse(localStorage.getItem("species"))
const abilities = JSON.parse(localStorage.getItem("abilities"))
const languages = JSON.parse(localStorage.getItem("languages"))

// sets the initial state on load
const initialState = {
  all: [],
  berries: berries ? berries : [],
  pokedexes: pokedexes ? pokedexes : [],
  versions: versions ? versions : [],
  items: items ? items : [],
  locations: locations ? locations : [],
  regions: regions ? regions : [],
  moves: moves ? moves : [],
  species: species ? species : [],
  abilities: abilities ? abilities : [],
  languages: languages ? languages : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// retrieves all of the berries in the self-hosted PokeAPI database
export const retrieveBerries = createAsyncThunk(
  "pokedex/getAllBerries",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveBerries()
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

// retrieves all of the pokedexes in the self-hosted PokeAPI database
export const retrievePokedexes = createAsyncThunk(
  "pokedex/getAllPokedexes",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrievePokedexes()
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

// retrieves all of the versions in the self-hosted PokeAPI database
export const retrieveVersions = createAsyncThunk(
  "pokedex/getAllVersions",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveVersions()
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

// retrieves all of the items in the self-hosted PokeAPI database
export const retrieveItems = createAsyncThunk(
  "pokedex/getAllItems",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveItems()
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

// retrieves all of the locations in the self-hosted PokeAPI database
export const retrieveLocations = createAsyncThunk(
  "pokedex/getAllLocations",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveLocations()
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

// retrieves all of the regions in the self-hosted PokeAPI database
export const retrieveRegions = createAsyncThunk(
  "pokedex/getAllRegions",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveRegions()
    } catch (error) {
      const message =
        retrieveLocations(
          error.response && error.response.data && error.response.data.message
        ) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// retrieves all of the moves in the self-hosted PokeAPI database
export const retrieveMoves = createAsyncThunk(
  "pokedex/getAllMoves",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveMoves()
    } catch (error) {
      const message =
        retrieveLocations(
          error.response && error.response.data && error.response.data.message
        ) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// retrieves all of the species in the self-hosted PokeAPI database
export const retrieveSpecies = createAsyncThunk(
  "pokedex/getAllSpecies",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveSpecies()
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

// retrieves all of the abilities in the self-hosted PokeAPI database
export const retrieveAbilities = createAsyncThunk(
  "pokedex/getAllAbilities",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveAbilities()
    } catch (error) {
      const message =
        retrieveLocations(
          error.response && error.response.data && error.response.data.message
        ) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// retrieves all of the languages in the self-hosted PokeAPI database
export const retrieveLanguages = createAsyncThunk(
  "pokedex/getAllLanguages",
  async (_, thunkAPI) => {
    try {
      return await pokedexService.retrieveLanguages()
    } catch (error) {
      const message =
        retrieveLocations(
          error.response && error.response.data && error.response.data.message
        ) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// retrieves all of the searchable entires in the self-hosted PokeAPI database
export const retrieveAll = createAsyncThunk(
  "pokedex/getAll",
  async (_, thunkAPI) => {
    try {
      const berries = await pokedexService.retrieveBerries()
      const shapedBerries = berries.map(o => ({
        ...o,
        type: "berries",
      }))
      const species = await pokedexService.retrieveSpecies()
      const shapedSpecies = species.map(o => ({
        ...o,
        type: "pokemon",
      }))
      const items = await pokedexService.retrieveItems()
      const shapedItems = items.map(o => ({
        ...o,
        type: "item",
      }))
      const locations = await pokedexService.retrieveLocations()
      const shapedLocations = locations.map(o => ({
        ...o,
        type: "location",
      }))
      const regions = await pokedexService.retrieveRegions()
      const shapedRegions = regions.map(o => ({
        ...o,
        type: "region",
      }))
      const moves = await pokedexService.retrieveMoves()
      const shapedMoves = moves.map(o => ({
        ...o,
        type: "move",
      }))
      const abilities = await pokedexService.retrieveAbilities()
      const shapedAbilities = abilities.map(o => ({
        ...o,
        type: "ability",
      }))
      const all = [
        ...shapedSpecies,
        ...shapedMoves,
        ...shapedAbilities,
        ...shapedItems,
        ...shapedBerries,
        ...shapedLocations,
        ...shapedRegions,
      ]
      return all
    } catch (error) {
      return thunkAPI.rejectWithValue("ERROR")
    }
  }
)

// create the slice and reduce it based on case
export const pokedexPokemonSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(retrieveSpecies.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveSpecies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.species = action.payload
      })
      .addCase(retrieveSpecies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.species = null
      })
      .addCase(retrieveBerries.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveBerries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.berries = action.payload
      })
      .addCase(retrieveBerries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.berries = null
      })
      .addCase(retrievePokedexes.pending, state => {
        state.isLoading = true
      })
      .addCase(retrievePokedexes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pokedexes = action.payload
      })
      .addCase(retrievePokedexes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.pokedexes = null
      })
      .addCase(retrieveVersions.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveVersions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.versions = action.payload
      })
      .addCase(retrieveVersions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.versions = null
      })
      .addCase(retrieveItems.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items = action.payload
      })
      .addCase(retrieveItems.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.items = null
      })
      .addCase(retrieveLocations.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveLocations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.locations = action.payload
      })
      .addCase(retrieveLocations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.locations = null
      })
      .addCase(retrieveRegions.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveRegions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.regions = action.payload
      })
      .addCase(retrieveRegions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.regions = null
      })
      .addCase(retrieveMoves.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveMoves.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.moves = action.payload
      })
      .addCase(retrieveMoves.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.moves = null
      })
      .addCase(retrieveAbilities.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveAbilities.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.abilities = action.payload
      })
      .addCase(retrieveAbilities.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.abilities = null
      })
      .addCase(retrieveLanguages.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveLanguages.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.languages = action.payload
      })
      .addCase(retrieveLanguages.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.languages = null
      })
      .addCase(retrieveAll.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveAll.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.all = action.payload
      })
      .addCase(retrieveAll.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.all = null
      })
  },
})

// export the reset function (IT DOES NOT WORK, USE AUTHSLICE RESET INSTEAD)
export const { reset, getAll } = pokedexPokemonSlice.actions
// export the reducer
export default pokedexPokemonSlice.reducer
