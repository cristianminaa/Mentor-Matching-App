import { isEmpty } from "lodash"
import { store } from "../redux/store"
export const isAuthenticated = () => !isEmpty(store.getState().users.currentUser)
