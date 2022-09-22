/**
 * entry-service.jsx
 * Retrieves the meta data on the Pokedex entry passed.
 */

import axios from "axios"

const retrieveEntry = async query => {
  console.log(query)
  const response = await axios.get(query.replace(/http/g, "https"))
  if (response.data) {
    return response.data
  }
}

// define a const to export
const entryService = {
  retrieveEntry,
}

// export it as the default
export default entryService
