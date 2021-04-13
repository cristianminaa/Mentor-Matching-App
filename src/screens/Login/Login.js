import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { logIn } from "../../redux/actions"
import { Inputs } from "../../components"
import "./styles.scss"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const handleLogin = () => dispatch(logIn({ email, password }))

  return (
    <div className="login-container">
      <div className="login-container-inner">
        <div className="login-image-logo" />
        <div className="login-input">
          <Inputs.Text
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="Email: "
          />
          <Inputs.Text
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Password:"
            onKeyDown={({ keyCode }) => keyCode === 13 && handleLogin()}
          />
          <Inputs.Button text="Log in" onClick={() => handleLogin()} />
        </div>
        <div className="additional">
          <NavLink to="/register">Register here!</NavLink>
          <NavLink to="/faq">Need Help?</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Login
