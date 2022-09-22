/**
 * search.jsx
 * A global search page with multiple capabilities of filtering based on
 * Pokedex data schema.
 */

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../helpers/auth/auth-slice"
import {
  retrieveSpecies,
  retrieveAll,
} from "../../helpers/pokedex/pokedex-slice"
import Fuse from "fuse.js"
import SearchBar from "../../components/search-bar"
import SearchResults from "../../components/search-results"
import "./search.scss"

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // set the current state for reference
  const { trainer } = useSelector(state => state.auth)
  const { all } = useSelector(state => state.pokedex)
  const { searchQuery } = useSelector(state => state.ui)

  // search should be available only to registered trainers
  useEffect(() => {
    if (!trainer) {
      navigate("/login")
    }
    dispatch(retrieveAll())
    return () => {
      dispatch(reset())
    }
  }, [trainer, dispatch])

  // fusejs fuzzy search
  const fuse = new Fuse(all, {
    keys: ["name"],
    isCaseSensitive: true,
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })
  const fuseFilter = fuse.search(searchQuery)

  return (
    <>
      <SearchBar />
      <SearchResults data={fuseFilter} hideEmpty={false} />
    </>
  )
}
export default Search
