import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./auth-service"

// gets the user from localStorage
const trainer = JSON.parse(localStorage.getItem("trainer"))

// sets the initial state on load
const initialState = {
  trainer: trainer ? trainer : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// registers trainer
export const register = createAsyncThunk(
  "auth/register",
  async (trainer, thunkAPI) => {
    try {
      return await authService.register(trainer)
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

// logs in trainer
export const login = createAsyncThunk(
  "auth/login",
  async (trainer, thunkAPI) => {
    try {
      return await authService.login(trainer)
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

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

// creates a slice for auth and declares a reducer function to reset to initial
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trainer = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.trainer = null
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trainer = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.trainer = null
      })
      .addCase(logout.fulfilled, state => {
        state.trainer = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
