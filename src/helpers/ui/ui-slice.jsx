/**
 * ui-slice.jsx
 * Defines the state slice of ui for sharing state of ui components at the
 * global level without the complexity of liftin up state.
 * References:
 * - https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import entryService from "../entry/entry-service"

// gets the ui state from localStorage
const ui = JSON.parse(localStorage.getItem("ui"))

// sets the initial ui state on load
const initialState = ui
  ? ui
  : {
      isMenuToggled: false,
      searchQuery: "",
      viewing: {
        name: "",
        url: "",
        type: "",
        data: "",
      },
      isError: false,
      isSuccess: false,
      isLoading: false,
      message: "",
    }

// registers trainer
export const retrieveEntry = createAsyncThunk(
  "ui/getEntry",
  async (data, thunkAPI) => {
    try {
      console.log(JSON.stringify(data))
      return await entryService.retrieveEntry(data)
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

// creates a slice for auth and declares a reducer function to reset to initial
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    menuToggle: state => {
      state.isMenuToggled = !state.isMenuToggled
      localStorage.setItem("ui", JSON.stringify(state))
    },
    setSearchQuery: (state, query) => {
      state.searchQuery = `${query.payload}`
      localStorage.setItem("ui", JSON.stringify(state))
    },
    setViewing: (state, viewing) => {
      state.viewing.name = `${viewing.payload.name}`
      state.viewing.url = `${viewing.payload.url}`
      state.viewing.type = `${viewing.payload.type}`
      localStorage.setItem("ui", JSON.stringify(state))
    },
  },
  extraReducers: builder => {
    builder
      .addCase(retrieveEntry.pending, state => {
        state.isLoading = true
      })
      .addCase(retrieveEntry.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.viewing.data = action.payload
      })
      .addCase(retrieveEntry.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.viewing.data = null
      })
  },
})

export const { menuToggle, setSearchQuery, setViewing } = uiSlice.actions
export default uiSlice.reducer
