/**
 * search-results.jsx
 * A generalized search results component that returns the data in a formatted
 * list.
 */

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import SearchResultItem from "../search-result-item"
import { setViewing } from "../../helpers/ui/ui-slice"
import "./search-results.scss"

const SearchResults = ({ data }) => {
  // const [newData, setNewData] = useState()
  // const retrieveSpecies = async item => {
  //   const response = await axios.get(item.item.url)
  //   if (response.data) {
  //     setNewData(response.data.results)
  //   }
  // }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <ol>
        {data &&
          data.map((item, index) => (
            <li
              className="search-item"
              key={index}
              onClick={() => {
                dispatch(setViewing(item.item))
                navigate("/entry")
              }}
            >
              <span className="search-item-highlight">
                <SearchResultItem hit={item} attribute="name" />
              </span>
              <span className="search-item-type">{item.item.type}</span>
            </li>
          ))}
      </ol>
    </div>
  )
}
export default SearchResults
