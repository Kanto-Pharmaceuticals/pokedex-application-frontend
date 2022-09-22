/**
 * pokedex-pokemon-service.jsx
 * Retrieves the entire list of Pokedex entries from self-hosted PokeAPI using
 * a simple axios get request.  The list is needed to populate a small JSON
 * list for FuseJS to use as search data to enable fuzzy searching.  Otherwise,
 * user's will need to enter exact strings
 */

import axios from "axios"

// append this to the end of the API secret
const API_BERRIES = "berry/?limit=10000"
const API_POKEDEXES = "pokedex/?limit=10000"
const API_VERSIONS = "version-group/?limit=10000"
const API_ITEMS = "item/?limit=10000"
const API_LOCATIONS = "location/?limit=10000"
const API_REGIONS = "region/?limit=10000"
const API_MACHINES = "machine/?limit=10000"
const API_MOVES = "move/?limit=10000"
const API_SPECIES = "pokemon-species/?limit=10000"
const API_ABILITIES = "ability/?limit=10000"
const API_LANGUAGES = "language/?limit=10000"

// retrieves all of the berries in the self-hosted PokeAPI database
const retrieveBerries = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_BERRIES
  )

  if (response.data) {
    localStorage.setItem("berries", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the species in the self-hosted PokeAPI database
const retrieveSpecies = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_SPECIES
  )

  if (response.data) {
    localStorage.setItem("species", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the pokedexes in the self-hosted PokeAPI database
const retrievePokedexes = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_POKEDEXES
  )

  if (response.data) {
    localStorage.setItem("pokedexes", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the versions in the self-hosted PokeAPI database
const retrieveVersions = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_VERSIONS
  )

  if (response.data) {
    localStorage.setItem("versions", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the versions in the self-hosted PokeAPI database
const retrieveItems = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_ITEMS
  )

  if (response.data) {
    localStorage.setItem("item", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the locations in the self-hosted PokeAPI database
const retrieveLocations = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_LOCATIONS
  )

  if (response.data) {
    localStorage.setItem("locations", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the regions in the self-hosted PokeAPI database
const retrieveRegions = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_REGIONS
  )

  if (response.data) {
    localStorage.setItem("regions", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the regions in the self-hosted PokeAPI database
const retrieveMachines = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_MACHINES
  )

  if (response.data) {
    localStorage.setItem("machines", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the moves in the self-hosted PokeAPI database
const retrieveMoves = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_MOVES
  )

  if (response.data) {
    localStorage.setItem("moves", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the moves in the self-hosted PokeAPI database
const retrieveAbilities = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_ABILITIES
  )

  if (response.data) {
    localStorage.setItem("abilities", JSON.stringify(response.data))
  }
  return response.data.results
}

// retrieves all of the moves in the self-hosted PokeAPI database
const retrieveLanguages = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_LANGUAGES
  )

  if (response.data) {
    localStorage.setItem("languages", JSON.stringify(response.data))
  }
  return response.data.results
}

// define a const to export
const pokedexPokemonService = {
  retrieveBerries,
  retrievePokedexes,
  retrieveVersions,
  retrieveItems,
  retrieveLocations,
  retrieveRegions,
  retrieveMachines,
  retrieveMoves,
  retrieveSpecies,
  retrieveAbilities,
  retrieveLanguages,
}

// export it as the default
export default pokedexPokemonService
