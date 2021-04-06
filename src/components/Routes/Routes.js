import React from "react"
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom"
import { isAuthenticated } from "../../utilities"
import { Home, Login, Register, FAQ, Profile, Chat, Support } from "../../screens"
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
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/Chat" component={Chat} />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/support" component={Support} />
      </Switch>
    </Router>
  )
}
export default withRouter(Routes)
