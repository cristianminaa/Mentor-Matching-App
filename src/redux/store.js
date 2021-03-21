import { createStore, applyMiddleware, compose } from "redux"
import reducers from "./reducers"
import logger from "redux-logger"

const createHistory = require("history").createBrowserHistory
const history = createHistory()

let store = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(logger))(
  createStore
)

store = createStoreWithMiddleware(reducers)

export { store, history }
