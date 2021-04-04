import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"
import { NavLink } from "react-router-dom"


const Home = () => {
  const { currentUser } = useSelector((state) => state.users)
  const displayUser = (user) => {
    const userDetails = []
    let i=0
    for (const [key, value] of Object.entries(user)) {
      //Prints user information but does not print variable with link to profile picture
      //Skips the variable that holds the user's password for s
      i++
      if(i>Object.entries(user).length-1) {
        break
      } else if(key=="password") {
        continue
      }
      userDetails.push(<p>{`${key}: ${value}`}</p>)
    }
    return userDetails
  }

  return (
    <>
      <div className="wrapper">
        <div className="profilePic">
          <NavLink to="/profile"><img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/></NavLink>
          {/* <a href="/profile"><img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/></a> */}
        </div>
        <div className="searchbar">
          <img className="search-icon" src="https://static.thenounproject.com/png/101791-200.png" alt="" />
          <input placeholder="Search" type="text" className="search" />
        </div>
        <div className="msg">
          <NavLink to="/Chat"><img height="30" src="/images/message.png" alt="Messenger free icon"/></NavLink>
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
