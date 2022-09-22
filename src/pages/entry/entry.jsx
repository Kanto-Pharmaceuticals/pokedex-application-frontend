/**
 * entry.jsx
 * A generalized component for displaying Pokedex entries for any searchable
 * object in the PokeAPI database.
 */

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../helpers/auth/auth-slice"
import { retrieveEntry } from "../../helpers/ui/ui-slice"

import "./entry.scss"

const Entry = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { trainer } = useSelector(state => state.auth)
  const { viewing } = useSelector(state => state.ui)

  // entry should be available only to registered trainers
  useEffect(() => {
    if (!trainer) {
      navigate("/login")
    }
    dispatch(retrieveEntry(viewing.url))
    return () => {
      dispatch(reset())
    }
  }, [trainer, dispatch])

  return (
    <div className="entry">
      {viewing.type === "pokemon" && (
        <div className="entry-pokemon">
          <div className="entry-header">
            <h1 className="entry-name">{viewing.name} </h1>
            <span className="entry-number">{viewing.data.id}</span>
          </div>
          <p>{viewing.data.flavor_text_entries[4].flavor_text}</p>
        </div>
      )}
    </div>
  )
}
export default Entry
