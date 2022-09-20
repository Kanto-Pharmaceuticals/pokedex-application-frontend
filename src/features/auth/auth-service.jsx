import axios from "axios"

const TRAINER_API = "/api/trainers/"

// registers user
const register = async trainerData => {
  const response = await axios.post(TRAINER_API, trainerData)

  if (response.data) {
    localStorage.setItem("trainer", JSON.stringify(response.data))
  }

  return response.data
}

// logs in user
const login = async trainerData => {
  const response = await axios.post(TRAINER_API + "login", trainerData)

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
