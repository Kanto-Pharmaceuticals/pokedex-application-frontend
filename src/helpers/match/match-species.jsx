/**
 * match-species.jsx
 * Attempets to match the passed Pokemon species with a known one in the
 * PokeAPI Species database list which is stored in state.
 */

import { useState } from "react"
import { useSelector } from "react-redux"

const MatchSpecies = ({ species }) => {
  const { pokedex } = useSelector(state => state.pokedex)

  pokedex.pokemon.map(pokemon => {
    if (species === pokemon) {
      return true
    }
  })

  return false
}

export default MatchSpecies
