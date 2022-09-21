import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPokemon } from "../../helpers/pokemon/pokemon-slice"

const PokemonForm = () => {
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createPokemon({ name, species }))
    setName("")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Species</label>
          <input
            type="text"
            name="species"
            id="species"
            value={species}
            onChange={e => setSpecies(e.target.value)}
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
