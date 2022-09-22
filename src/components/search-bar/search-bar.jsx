/**
 * search-bar.jsx
 * A generalized search bar component that sets the global query state to the
 * input's target value
 */

import { setSearchQuery } from "../../helpers/ui/ui-slice"
import { useDispatch, useSelector } from "react-redux"

const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector(state => state.ui)

  return (
    <>
      <input
        type="text"
        placeholder="search"
        className="search"
        value={searchQuery}
        onChange={e => {
          dispatch(setSearchQuery(e.target.value))
        }}
      />
    </>
  )
}
export default SearchBar
