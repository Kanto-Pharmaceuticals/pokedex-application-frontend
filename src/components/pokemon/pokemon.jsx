import { useDispatch } from "react-redux"
import { deletePokemon } from "../../features/pokemon/pokemonSlice"

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch()
  return (
    <div className="pokemon">
      <div>{new Date(pokemon.createdAt).toLocaleString("en-US")}</div>
      <h2>{pokemon.text}</h2>
      <button
        onClick={() => dispatch(deletePokemon(pokemon._id))}
        className="close"
      >
        X
      </button>
    </div>
  )
}

export default Pokemon
