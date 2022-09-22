/**
 * search-results.jsx
 * A generalized search results component that returns the data in a formatted
 * list.
 */

import axios from "axios"
import { useEffect, useState } from "react"
import SearchResultItem from "../search-result-item"
import "./search-results"

const SearchResults = ({ data }) => {
  const [newData, setNewData] = useState()
  const retrieveSpecies = async item => {
    const response = await axios.get(item.item.url)
    if (response.data) {
      setNewData(response.data.results)
    }
  }

  return (
    <div>
      <ol>
        {data &&
          data.map((item, index) => (
            <li className="search-list-item" key={index}>
              <SearchResultItem hit={item} attribute="name" />
            </li>
          ))}
      </ol>
    </div>
  )
}
export default SearchResults
