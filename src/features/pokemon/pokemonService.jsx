import axios from "axios"
import pokemon from "../../components/pokemon"

const API_URL = "/api/pokemon/"

// creates new pokemon
const createPokemon = async (pokemonData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, pokemonData, config)

  return response.data
}

// get trainer's pokemon
const getPokemon = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data.pokemon
}

// deletes a pokemon
const deletePokemon = async (pokemonId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + pokemonId, config)

  return response.data
}

const pokemonService = {
  createPokemon,
  getPokemon,
  deletePokemon,
}

export default pokemonService
