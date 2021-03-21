import { usersActions } from "../actions"
import { usersData } from "../../data"
import Swal from "sweetalert2"

const initialState = {
  allUsers: usersData,
  currentUser: {},
}

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case usersActions.LOG_IN:
      return { ...state, currentUser: getUser(state.allUsers, payload) }
    case usersActions.LOG_OUT:
      return { ...state, currentUser: {} }
    case usersActions.ADD_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, payload],
        currentUser: payload,
      }
    default:
      return state
  }
}

export default users

const getUser = (allUsers, { email, password }) => {
  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Missing details",
      text: "Please enter email and password!",
    })
    return {}
  }
  const user = allUsers.find(
    (user) => user?.email === email && user?.password === password
  )
  if (!user)
    Swal.fire({
      icon: "error",
      title: "Wrong credentials",
      text: "Please try again!",
    })
  return user || {}
}
