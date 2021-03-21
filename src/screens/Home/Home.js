import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"

const Home = () => {
  const { currentUser } = useSelector((state) => state.users)

  const displayUser = (user) => {
    const userDetails = []
    for (const [key, value] of Object.entries(user))
      userDetails.push(<p>{`${key}: ${value}`}</p>)
    return userDetails
  }

  return <>{displayUser(currentUser)}</>
}
export default Home
