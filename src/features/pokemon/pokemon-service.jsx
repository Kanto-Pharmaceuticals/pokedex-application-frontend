import axios from "axios"
import pokemon from "../../components/pokemon"

const TRAINER_API = "/api/pokemon/"

// creates new pokemon
const createPokemon = async (pokemonData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(TRAINER_API, pokemonData, config)

  return response.data
}

// get trainer's pokemon
const getPokemon = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(TRAINER_API, config)

  return response.data.pokemon
}

// deletes a pokemon
const deletePokemon = async (pokemonId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(TRAINER_API + pokemonId, config)

  return response.data
}

const pokemonService = {
  createPokemon,
  getPokemon,
  deletePokemon,
}

export default pokemonService
