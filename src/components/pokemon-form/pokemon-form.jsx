import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPokemon } from "../../features/pokemon/pokemonSlice"

const PokemonForm = () => {
  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createPokemon({ text }))
    setText("")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Pokemon</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Pokemon
          </button>
        </div>
      </form>
    </section>
  )
}

export default PokemonForm
