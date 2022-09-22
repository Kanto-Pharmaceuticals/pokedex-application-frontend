/**
 * ui-slice.jsx
 * Defines the state slice of ui for sharing state of ui components at the
 * global level without the complexity of liftin up state.
 * References:
 * - https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/
 */

import { createSlice } from "@reduxjs/toolkit"

// gets the ui state from localStorage

// sets the initial ui state on load
const initialState = {
  isMenuToggled: false,
  searchQuery: "",
}

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
  },
})

export const { menuToggle, setSearchQuery } = uiSlice.actions
export default uiSlice.reducer
