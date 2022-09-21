import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/navbar"
import Header from "./components/header"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login/login"
import Register from "./pages/register"
import Search from "./pages/search"

function App() {
  return (
    <>
      <Router>
        <div className="global-wrapper">
          <Header />
          <Navbar />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
