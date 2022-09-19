import axios from "axios"

const API_URL = "/api/trainers/"

// registers user
const register = async trainerData => {
  const response = await axios.post(API_URL, trainerData)

  if (response.data) {
    localStorage.setItem("trainer", JSON.stringify(response.data))
  }

  return response.data
}

// logs in user
const login = async trainerData => {
  const response = await axios.post(API_URL + "login", trainerData)

  if (response.data) {
    localStorage.setItem("trainer", JSON.stringify(response.data))
  }

  return response.data
}

// logs the trainer out
const logout = () => {
  localStorage.removeItem("trainer")
}

const authService = {
  register,
  logout,
  login,
}

export default authService
