import { useState, useEffect } from "react"
import { LogIn } from "react-feather"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../../helpers/auth/auth-slice"
import Spinner from "../../components/spinner"

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  })

  const { name, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { trainer, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || trainer) {
      navigate("/")
    }
    dispatch(reset())
  }, [trainer, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const trainerData = {
      name,
      password,
    }
    dispatch(login(trainerData))
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>
          <LogIn /> Login
        </h1>
        <p>Please login to your trainer account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Please enter your trainer name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Please enter your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
