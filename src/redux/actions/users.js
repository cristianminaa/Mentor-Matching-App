export const usersActions = {
  LOG_IN: "users/LOG_IN",
  LOG_OUT: "users/LOG_OUT",
  ADD_USER: "users/ADD_USER",
  // GET_USER: "users/GET_USER",
}

export const logIn = (payload) => ({ type: usersActions.LOG_IN, payload })
export const logOut = () => ({ type: usersActions.LOG_OUT })
export const addUser = (payload) => ({ type: usersActions.ADD_USER, payload })
// export const getUser = (payload) => ({ type: usersActions.GET_USER, payload })
