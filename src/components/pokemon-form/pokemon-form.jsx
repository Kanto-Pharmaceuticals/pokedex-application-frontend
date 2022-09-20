import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPokemon } from "../../features/pokemon/pokemon-slice"

const PokemonForm = () => {
  const [name, setName] = useState("")

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createPokemon({ name }))
    setName("")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Pokemon</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
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
