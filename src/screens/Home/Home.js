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

  return (
    <>
      <div className="wrapper">
        <div className="profilePic">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/>
        </div>
        <div className="searchbar">
          <img class="search-icon" src="https://static.thenounproject.com/png/101791-200.png" alt="" />
          <input placeholder="Search" type="text" class="search" />
        </div>
        <div className="msg">
          <img height="30" src="http://cdn.onlinewebfonts.com/svg/img_397748.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div className="profile">
        <h3>Personal Details</h3>
        {displayUser(currentUser)}
      </div>
      <div className="profile">
        <p><h3>Categories</h3></p>
        <p>Tag A</p>
        <p>Tag B</p>
        <p>Tag C</p>
        <p>Tag D</p>
        <p>Tag E</p>
        <p>Tag F</p>
      </div>
    </>
  )
}
export default Home
