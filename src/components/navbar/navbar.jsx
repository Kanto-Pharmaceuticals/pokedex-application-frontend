import { LogIn, LogOut, UserPlus } from "react-feather"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { trainer } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">PokemonSetter</Link>
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
