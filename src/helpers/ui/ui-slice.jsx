/**
 * ui-slice.jsx
 * Defines the state slice of ui for sharing state of ui components at the
 * global level without the complexity of liftin up state.
 */

import { createSlice } from "@reduxjs/toolkit"

// gets the ui state from localStorage

// sets the initial ui state on load
const initialState = {
  isMenuToggled: false,
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
  },
})

export const { menuToggle, navbarToggle } = uiSlice.actions
export default uiSlice.reducer
