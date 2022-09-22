import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, Home, BookOpen, Search, LogIn, LogOut } from "react-feather"
import { logout, reset } from "../../helpers/auth/auth-slice"
import { menuToggle } from "../../helpers/ui/ui-slice"
import { debounce } from "../../helpers/debouce"
import "./navbar.scss"

const Navbar = props => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { trainer } = useSelector(state => state.auth)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  // new function:
  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset
    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 10
    )
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos)
  }, 50)

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <nav className={visible ? "navigation" : "navigation navigation-hide"}>
      <motion.button
        aria-label="Hamburger menu button"
        className="navigation-button"
        onClick={() => {
          dispatch(menuToggle())
        }}
        initial={{
          backgroundColor: "var(--color-white)",
          color: "var(--color-text)",
        }}
        whileHover={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
        whileTap={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
          },
        }}
      >
        <Menu />
        <span>Menu</span>
      </motion.button>
      <motion.button
        aria-label="Navigation home button"
        className="navigation-button"
        onClick={() => {
          navigate("/")
        }}
        initial={{
          backgroundColor: "var(--color-white)",
          color: "var(--color-text)",
        }}
        whileHover={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
        whileTap={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
          },
        }}
      >
        <Home />
        <span>Home</span>
      </motion.button>
      <motion.button
        aria-label="Navigation Pokedex button"
        className="navigation-button"
        onClick={() => {
          navigate("/pokedex")
        }}
        initial={{
          backgroundColor: "var(--color-white)",
          color: "var(--color-text)",
        }}
        whileHover={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
        whileTap={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
          },
        }}
      >
        <BookOpen />
        <span>Pokedex</span>
      </motion.button>
      <motion.button
        aria-label="Navigation search button"
        className="navigation-button"
        onClick={() => {
          navigate("/search")
        }}
        initial={{
          backgroundColor: "var(--color-white)",
          color: "var(--color-text)",
        }}
        whileHover={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
        whileTap={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-white)",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
          },
        }}
      >
        <Search />
        <span>Search</span>
      </motion.button>
      {!trainer && (
        <motion.button
          aria-label="Log in button"
          className="navigation-button"
          onClick={() => navigate("/login")}
          initial={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-text)",
          }}
          whileHover={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
          whileTap={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.1,
            },
          }}
        >
          <LogIn />
          <span>Log In</span>
        </motion.button>
      )}
      {trainer && (
        <motion.button
          aria-label="Log out button"
          className="navigation-button"
          onClick={onLogout}
          initial={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-text)",
          }}
          whileHover={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
          whileTap={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.1,
            },
          }}
        >
          <LogOut />
          <span>Log Out</span>
        </motion.button>
      )}
    </nav>
  )
}

export default Navbar
