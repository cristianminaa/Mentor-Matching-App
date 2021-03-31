import React from "react"
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom"
import { isAuthenticated } from "../../utilities"
import { Home, Login, Register, FAQ, Profile } from "../../screens"
import { Header } from "../"
import { history } from "../../redux/store"

const PrivateRoute = ({ children, ...rest }) => {
  return ( 
    <Route
      render={({ location }) =>
        isAuthenticated() ? (
          <Route {...rest} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  )
}

const AuthRoute = ({ children, ...rest }) => (
  <Route
    render={({ location }) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      ) : (
        <Route {...rest} />
      )
    }
  />
)

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/profile" component={Profile} />
        <AuthRoute exact path="/home" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}
export default withRouter(Routes)
