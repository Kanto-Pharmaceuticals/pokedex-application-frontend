/**
 * pokedex-pokemon-service.jsx
 * Retrieves the entire list of Pokemon from self-hosted PokeAPI using a simple
 * axios get request.  The list is needed to populate a small JSON list for
 * FuseJS to use as search data to enable fuzzy searching.  Otherwise, user's
 * will need to enter exact strings
 */

import axios from "axios"

// append this to the end of the API secret
const API_APPEND = "pokemon-species/?limit=10000"

// retrieves all of the pokemon in the self-hosted PokeAPI database
const retrievePokemon = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKE_API}` + API_APPEND
  )

  if (response.data) {
    return response.data.results
  }
}

// define a const to export
const pokedexPokemonService = {
  retrievePokemon,
}

// export it as the default
export default pokedexPokemonService
