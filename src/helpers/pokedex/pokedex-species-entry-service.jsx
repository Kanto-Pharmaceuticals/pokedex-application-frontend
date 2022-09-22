/**
 * pokedex-species-entry-service.jsx
 * Retrives the meta data on the passed Pokemon prop.
 */

import axios from "axios"

// append this to the end of the API secret
const API_APPEND = "pokemon-species/"

const retrieveSpecies = async ({ query }) => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_APPEND + query
  )
  if (response.data) {
    return response.data.results
  }
}

// define a const to export
const pokedexSpeciesEntryService = {
  retrieveSpecies,
}

// export it as the default
export default pokedexSpeciesEntryService
