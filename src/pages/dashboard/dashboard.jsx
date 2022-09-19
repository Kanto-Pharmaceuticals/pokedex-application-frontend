import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import PokemonForm from "../../components/pokemon-form"
import PokemonItem from "../../components/pokemon"
import Spinner from "../../components/spinner"
import { reset } from "../../features/auth/authSlice"
import { getPokemon } from "../../features/pokemon/pokemonSlice"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { trainer } = useSelector(state => state.auth)
  const { pokemon, isLoading, isError, message } = useSelector(
    state => state.pokemon
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!trainer) {
      navigate("/login")
    }
    dispatch(getPokemon())
    return () => {
      dispatch(reset())
    }
  }, [trainer, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {trainer && trainer.name}</h1>
        <p>Pokémon Dashboard</p>
      </section>
      <PokemonForm />
      <section className="content">
        {pokemon.length > 0 ? (
          <div className="pokemons">
            {pokemon.map(pokemon => (
              <PokemonItem key={pokemon._id} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <h3>You have no Pokémon</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
