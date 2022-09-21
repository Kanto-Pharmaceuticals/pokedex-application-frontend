import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { LogIn, LogOut, UserPlus } from "react-feather"
import { logout, reset } from "../../helpers/auth/auth-slice"
import { menuToggle } from "../../helpers/ui/ui-slice"
import { ReactComponent as Wordmark } from "../../images/pokedex-application-wordmark.svg"

const Navbar = props => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { trainer } = useSelector(state => state.auth)
  const { ui } = useSelector(state => state.ui)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">PokemonSetter</Link>
        <Wordmark />
        <button onClick={() => dispatch(menuToggle())}>Test</button>
      </div>
      <ul>
        {trainer ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <LogOut /> Log Out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <LogIn /> Log In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <UserPlus /> Register
              </Link>
            </li>{" "}
          </>
        )}
      </ul>
    </header>
  )
}

export default Navbar
