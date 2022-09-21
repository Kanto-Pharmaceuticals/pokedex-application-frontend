import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { Bell } from "react-feather"
import { debounce } from "../../helpers/debouce"
import "./header.scss"

const Header = () => {
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

  const { trainer } = useSelector(state => state.auth)
  return (
    <>
      {trainer && (
        <nav className={visible ? "header" : "header header-hide"}>
          <div className="header-trainer">
            <span className="header-trainer-name">{trainer.name}</span>
            <span className="header-trainer-role">{trainer.roles}</span>
          </div>
          <div className="header-notifcations">
            <motion.button
              aria-label="Header notifications button"
              className="navigation-button"
              onClick={() => {}}
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
              <Bell />
              <span>Notifications</span>
            </motion.button>
          </div>
        </nav>
      )}
    </>
  )
}
export default Header
